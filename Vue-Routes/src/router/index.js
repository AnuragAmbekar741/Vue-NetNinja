import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFoundPage from '../views/NotFoundPage.vue' 

import Books from '../views/Books/Books.vue'
import BookDetails from '../views/Books/BookDetails.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/books',
      name: 'books',
      component: Books
    },
    {
      path:'/books/:id',
      name:'bookDetails',
      component:BookDetails,
      props:true
    },

    //Redirect
    {
      path:'/all-books',
      redirect:'/books'
    },

    //Catch all non mentioned routes
    {
      path:'/:catchAll(.*)',
      name:'NotFoundPage',
      component: NotFoundPage
    }
  ]
})

export default router
