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

interface IDribbbleShot {
  html_url: string
  id: string
  images: {
    hidpi: string
  }
  title: string
}
