import { createRouter, createWebHashHistory } from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: WelcomePage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
