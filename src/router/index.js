import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/assigned',
      name: 'assigned',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AssignedView.vue')
    },
    {
      path: '/performed',
      name: 'performed',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PerformedView.vue')
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/KnowledgeView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SettingsView.vue')
    },
    {
      path: '/damagedetail/:id',
      name: 'damagedetail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/detail/DetailDamageView.vue')
    },
    {
      path: '/installationdetail/:id',
      name: 'installationdetail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/detail/DetailInstallationView.vue')
    },
    {
      path: '/maintanencedetail/:id',
      name: 'maintanencedetail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/detail/DetailMaintanenceView.vue')
    },
    {
      path: '/modificationdetail/:id',
      name: 'modificationdetail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/detail/DetailModificationView.vue')
    }
  ]
})

export default router
