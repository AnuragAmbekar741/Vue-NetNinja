import { createRouter, createWebHistory } from 'vue-router'
import RefVsReactive from '../views/RefVsReactive.vue'
import ComputedProps from '../views/ComputedProps.vue'

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
    }
  ]
})

export default router
