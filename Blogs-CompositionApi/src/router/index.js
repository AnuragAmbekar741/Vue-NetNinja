import { createRouter, createWebHistory } from 'vue-router'
import RefVsReactive from '../views/RefVsReactive.vue'
import ComputedProps from '../views/ComputedProps.vue'
// import DataView from '../views/DataView.vue'
import FetchinData from '../components/FetchinData.vue'
import BookDetails from '../components/BookDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RefVsReactive
    },
    {
      path: '/names',
      name: 'names',
      component: ComputedProps
    },
    {
      path: '/data',
      name: 'data',
      component: FetchinData,
    },
    {
      path:'/data/:id',
      name:'details',
      component:BookDetails,
      props:true
    }
  ]
})

export default router
