// packages
import { createClient, ContentfulClientApi, EntryCollection } from 'contentful'

export const useCustomProp = (property: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(property)

export const useFetchContentful = async <T,>({
  contentfulEntryType,
  mountedRef,
  setState,
}: IPropsUseFetchContentful<
  ContentfulClientApi,
  EntryCollection<any>
>): Promise<void> => {
  const CONTENTFUL_SPACE = process.env.CONTENTFUL_SPACE
  const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN
  const CONTENTFUL_CLIENT = createClient({
    space: CONTENTFUL_SPACE,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
  })

  try {
    if (mountedRef.current) {
      const res = await CONTENTFUL_CLIENT.getEntries<T>({
        content_type: contentfulEntryType,
      })
      setState(res)
    }
  } catch (err) {
    console.error(err)
  }
}

export const useFilterContentfulByTag = ({
  entries,
  targetTag,
}: {
  entries: EntryCollection<any>
  targetTag: string
}) => {
  const filteredDown = entries.items.filter((entry: any) => {
    // this any is needed because metadata is not part of contentful's types at the moment...
    const filteredByTag = entry.metadata.tags.filter(
      tag => tag.sys.id === targetTag
    )

    if (filteredByTag.length) {
      return entry
    }
  })
  return filteredDown
}
