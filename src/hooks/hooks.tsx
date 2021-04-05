// third party types
import { ContentfulClientApi, EntryCollection } from 'contentful'

export const useCustomProp = (property: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(property)

export const useFetchContentful = async <T,>({
  contentfulClient,
  countentfulEntryType,
  mountedRef,
  setState,
}: IPropsUseFetchContentful<
  ContentfulClientApi,
  EntryCollection<any>
>): Promise<void> => {
  try {
    if (mountedRef.current) {
      const res = await contentfulClient.getEntries<T>({
        content_type: countentfulEntryType,
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
  console.log(filteredDown)
  return filteredDown
}
