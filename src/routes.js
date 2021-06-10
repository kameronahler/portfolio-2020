import { PageHome } from './components/Pages/Home/PageHome'
import { PageContact } from './components/Pages/Contact/PageContact'
import { PageExperience } from './components/Pages/Experience/PageExperience'
import { PageWork } from './components/Pages/Work/PageWork'
import { PageAbout } from './components/Pages/About/PageAbout'

export const routes = [
  { name: 'home', component: PageHome, path: '/' },
  { name: 'work', component: PageWork, path: '/work' },
  { name: 'experience', component: PageExperience, path: '/experience' },
  { name: 'about', component: PageAbout, path: '/about' },
  // { name: 'contact', component: PageContact, path: '/contact' },
]
