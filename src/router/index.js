import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Works from '@/components/Works'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/works',
    name: 'Works',
    component: Works
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
