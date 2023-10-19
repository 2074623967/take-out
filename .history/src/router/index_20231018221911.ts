import { createRouter, createWebHistory } from 'vue-router'
import TabsView from '../views/tabs/TabsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: TabsView,
      children: [
       
      ],
    },
    { name: 'login', path: '/login', component: LoginView },
    { name: 'shop', path: '/shop/:id', component: ShopView },
  ],
})

export default router
