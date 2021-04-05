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
