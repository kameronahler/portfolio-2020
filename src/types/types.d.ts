interface ILocation {
  pathname: string
}

interface IRoutes {
  name: string
  path: string
}

interface IContentfulBlogEntry {
  title: string
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
