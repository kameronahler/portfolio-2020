// packages
import { createClient, ContentfulClientApi, EntryCollection } from 'contentful'

export const useCustomProp = (property: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(property)

export const useFetchContentful = async <T,>({
  contentfulEntryType,
  mountedRef,
  setState,
  filterByTag,
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

  const filter = async (res: EntryCollection<any>, filterByTag: string) => {
    res.items = res.items.filter((entry: any) => {
      return entry.metadata.tags.some(tag => tag.sys.id === filterByTag)
    })
    return res
  }

  try {
    if (mountedRef.current && filterByTag) {
      const unfilteredCollection = await CONTENTFUL_CLIENT.getEntries<T>({
        content_type: contentfulEntryType,
      })

      const filteredCollection = await filter(unfilteredCollection, filterByTag)

      setState(filteredCollection)
    } else if (mountedRef.current) {
      const unfilteredCollection = await CONTENTFUL_CLIENT.getEntries<T>({
        content_type: contentfulEntryType,
      })

      setState(unfilteredCollection)
    }
    return
  } catch (err) {
    console.error(err)
  }
}

// does not set state (used for render filter)
export const useFilterContentfulByTag = (
  entries: EntryCollection<any>,
  filterByTag: string
) => {
  // this any is needed because metadata is not part of contentful's types at the moment...
  const filteredCollection = entries.items.filter((entry: any) => {
    const filteredByTag = entry.metadata.tags.filter(
      tag => tag.sys.id === filterByTag
    )

    if (filteredByTag.length) {
      return entry
    }
  })
  return filteredCollection
}
