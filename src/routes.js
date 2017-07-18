
import Index from '@/views/index'
import Recommend from '@/views/recommend'
import Macro from '@/views/macro'
import MacroList from '@/views/macro_list'
import Person from '@/views/person'
import PersonList from '@/views/person_list'
import Scenery from '@/views/scenery'
import SceneryList from '@/views/scenery_list'
import ContactUs from '@/views/contact_us'

let routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: Recommend
  },
  {
    path: '/macro',
    name: 'macro',
    component: Macro
  },
  {
    path: '/macro/list',
    name: 'macroList',
    component: MacroList
  },
  {
    path: '/person',
    name: 'person',
    component: Person
  },
  {
    path: '/person/list',
    name: 'personList',
    component: PersonList
  },
  {
    path: '/scenery',
    name: 'scenery',
    component: Scenery
  },
  {
    path: '/scenery/list',
    name: 'sceneryList',
    component: SceneryList
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: ContactUs
  }
];

export default routes;

