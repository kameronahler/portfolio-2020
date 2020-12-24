import PageHome from './components/Pages/PageHome'
import PageContact from './components/Pages/PageContact'
import PageExperience from './components/Pages/PageExperience'
import PageWork from './components/Pages/PageWork'
import PageBlog from './components/Pages/PageBlog'
import PageDribbble from './components/Pages/PageDribbble'
import PageAbout from './components/Pages/PageAbout'

export const routes = [
  { name: 'home', component: PageHome, path: '/' },
  { name: 'experience', component: PageExperience, path: '/experience' },
  { name: 'work', component: PageWork, path: '/work' },
  { name: 'about', component: PageAbout, path: '/about' },
  { name: 'blog', component: PageBlog, path: '/blog' },
  { name: 'dribbble', component: PageDribbble, path: '/dribbble' },
  { name: 'contact', component: PageContact, path: '/contact' },
]
