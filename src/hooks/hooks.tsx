// packages
import { createClient, ContentfulClientApi, EntryCollection } from 'contentful'

export const useCustomProp = (property: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(property)

export const useFetchContentful = async <T,>({
  contentfulEntryType,
  mountedRef,
  setState,
  filterByLabel,
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

  const filter = async (res: EntryCollection<any>, filterByLabel: string) => {
    res.items = res.items.filter((entry: any) => {
      return entry.metadata.tags.some(tag => tag.sys.id === filterByLabel)
    })
    return res
  }

  try {
    if (mountedRef.current && filterByLabel) {
      const unfilteredCollection = await CONTENTFUL_CLIENT.getEntries<T>({
        content_type: contentfulEntryType,
      })

      const filteredCollection = await filter(
        unfilteredCollection,
        filterByLabel
      )

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
