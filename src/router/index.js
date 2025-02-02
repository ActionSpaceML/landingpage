import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Contact from '../components/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ai-systems',
      name: 'ai-systems',
      component: () => import('../components/AISystems.vue')
    },
    {
      path: '/robots',
      name: 'robots',
      component: () => import('../components/Robots.vue')
    },
    {
      path: '/research',
      name: 'research',
      component: () => import('../components/Research.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})

export default router
