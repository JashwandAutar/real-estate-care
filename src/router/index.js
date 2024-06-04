import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/assigned',
      name: 'assigned',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AssignedView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/register',
      name: 'register', 
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/performed',
      name: 'performed',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PerformedView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/KnowledgeView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/settings',
      name: 'settings',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SettingsView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/damagedetail/:id',
      name: 'damagedetail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/detail/DetailDamageView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/installationdetail/:id',
      name: 'installationdetail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/detail/DetailInstallationView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/maintanencedetail/:id',
      name: 'maintanencedetail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/detail/DetailMaintanenceView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/modificationdetail/:id',
      name: 'modificationdetail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/detail/DetailModificationView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/editdamage/:id',
      name: 'editdamage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/edits/DamageEdit.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/editinstallation/:id',
      name: 'editinstallation',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/edits/InstallationEdit.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/editmaintenance/:id',
      name: 'editmaintenance',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/edits/MaintenanceEdit.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/editmodification/:id',
      name: 'editmodification/',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/edits/ModificationEdit.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/feed',
      name: 'feed',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FeedView.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(getAuth(), (user) => {
      removeListener();
      resolve(user);
    }, reject);
  });
}

router.beforeEach(async (to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)){
    if(await getCurrentUser()){
      next();
    }
    else{
      alert("You Do Not Have Access!!!");
      next("/");
    }
  }else{
    next();
  }
});

export default router
