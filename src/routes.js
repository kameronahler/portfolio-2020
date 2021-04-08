import { PageHome } from './components/Pages/Home/PageHome'
import { PageContact } from './components/Pages/Contact/PageContact'
import { PageExperience } from './components/Pages/Experience/PageExperience'
import { PageWork } from './components/Pages/Work/PageWork'
import { PageBlog } from './components/Pages/Blog/PageBlog'
import { PageDribbble } from './components/Pages/Dribbble/PageDribbble'
import { PageAbout } from './components/Pages/About/PageAbout'

export const routes = [
  { name: 'home', component: PageHome, path: '/' },
  { name: 'experience', component: PageExperience, path: '/experience' },
  { name: 'work', component: PageWork, path: '/work' },
  { name: 'about', component: PageAbout, path: '/about' },
  { name: 'blog', component: PageBlog, path: '/blog' },
  { name: 'dribbble', component: PageDribbble, path: '/dribbble' },
  { name: 'contact', component: PageContact, path: '/contact' },
]
