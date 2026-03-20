import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home-item.vue';
import History from './views/History-item.vue';
import Geography from './views/Geography-item.vue';
import Storie from './views/Stories-item.vue';
import Author from './views/Author-item.vue';
import Sale from './views/Sale-item.vue';
import StoriesDetails from './components/Component-stories-item.vue';
import EmpiresDetails from './components/Component-empires-item.vue';

const routes = [
  { path: '/', name: 'Home-item', component: Home },
  { path: '/History-item', name: 'history-item', component: History },
  { path: '/Geography-item', name: 'geography-item', component: Geography },
  { path: '/Stories-item', name: 'stories-item', component: Storie },
  { path: '/Author-item', name: 'author-item', component: Author },
  { path: '/Sale-item', name: 'sale-item', component: Sale },
  {
    path: '/stories/:id',
    component: StoriesDetails,
    name: 'StoriesDetails', // <--- Este nombre debe ser igual al usado en router.push
  },
  {
    path: '/empires/:id',
    component: EmpiresDetails,
    name: 'EmpiresDetails', // <--- Este nombre debe ser igual al usado en router.push
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // ✅ MEJORADO: Mejor scrollBehavior
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'auto' };
    }
  },
});

// ✅ Asegurar scroll en navegación
router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
