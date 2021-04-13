interface IPropsUseFetchContentful<ContentfulClientApi, EntryCollection> {
  contentfulEntryType: string
  mountedRef: React.MutableRefObject<Boolean>
  setState: React.Dispatch<React.SetStateAction<EntryCollection>>
}

interface ILocation {
  pathname: string
}

interface IRoutes {
  name: string
  path: string
}

interface IContentfulBlogEntry {
  body: any
}

interface IContentfulPortfolioEntry {
  body: Document
}

interface IDribbbleShot {
  html_url: string
  id: string
  images: {
    hidpi: string
  }
  title: string
}

interface ILoaderSVG {
  size: number
  strokeWidth: number
}

interface IHeader {
  children: React.ReactChild
  srOnly?: boolean
}

interface IHomeMenuOverlay {
  dropdownExpanded: boolean
  setDropdownExpanded: React.SetStateAction<any>
}

interface IExperienceCard {
  description: React.ReactNode
  href?: string
  srOnlyTitle?: string
  visual: React.ReactNode
}
