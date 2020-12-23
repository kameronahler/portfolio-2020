import PageHome from './components/Pages/PageHome'
import PageAbout from './components/Pages/PageAbout'
import PageContact from './components/Pages/PageContact'
import PageExperience from './components/Pages/PageExperience'
import PageWork from './components/Pages/PageWork'
import PageDribbble from './components/Pages/PageDribbble'

export const routes = [
  { name: 'home', component: PageHome, path: '/' },
  { name: 'experience', component: PageExperience, path: '/experience' },
  { name: 'work', component: PageWork, path: '/work' },
  { name: 'about', component: PageAbout, path: '/about' },
  { name: 'contact', component: PageContact, path: '/contact' },
  { name: 'dribbble', component: PageDribbble, path: '/dribbble' },
]
