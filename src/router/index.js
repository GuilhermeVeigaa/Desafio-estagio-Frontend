import { createWebHashHistory, createRouter } from 'vue-router'

import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/profile', component: Profile },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router