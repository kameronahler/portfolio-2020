interface IPropsUseFetchContentful<ContentfulClientApi, EntryCollection> {
  contentfulEntryType: string
  mountedRef: React.MutableRefObject<Boolean>
  setState: React.Dispatch<React.SetStateAction<EntryCollection>>
  filterByTag?: string
}

interface ILocation {
  pathname: string
}
interface IContentfulBlogEntry {
  body: any
}

interface IContentfulPortfolioEntry {
  body: Document
  order: number
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

interface IModal extends IOverlay {
  children: React.ReactElement
}

interface IOverlay {
  appendToId: string
  ariaLabel: string
  setOpen: React.SetStateAction<any>
}

interface IExperienceCard {
  arrowColor?: string
  description: React.ReactNode
  href?: string
  srOnlyTitle?: string
  visual: React.ReactNode
}

interface IOverviewNav {
  currentTagIndex: number
  currentTagTitle: string
  setCurrentTagIndex: React.Dispatch<React.SetStateAction<number>>
  totalTags: number
}
interface ISectionDribbble {
  ariaControlledBy: string
}
interface ISectionOverview {
  ariaControlledBy: string
}
interface ISectionRecent {
  ariaControlledBy: string
}
interface ISectionTabs {
  currentTab: string
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>
}

interface IContentCard {
  svg?: React.ReactNode
  title?: string
  description?: string
  children?: React.ReactNode
}
interface IHeader {
  children?: React.ReactChild
  title: string | React.ReactNode
}
interface IPageItems {
  location: ILocation
  setMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface IContactForm {
  email: string
  message: string
  name: string
}
interface IFormikTextInput {
  labelText: string
}

interface IFormikDataEncode extends IContactForm {
  'form-name': string
  honeypot: string
}

interface IZoomedModalImage {
  alt: string
  src: string
}

interface IRoute {
  component: React.FC
  name: string
  path: string
}

interface ILinkRoute {
  name: string
  path: string
}
