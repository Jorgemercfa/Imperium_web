import { createWebHashHistory, createRouter } from 'vue-router';
import Home from './views/Home-item.vue';
import History from './views/History-item.vue';
import Geography from './views/Geography-item.vue';
import Storie from './views/Stories-item.vue';
import Author from './views/Author-item.vue';
import Sale from './views/Sale-item.vue';
import Component from './components/Component-stories-item.vue';

const routes = [
  { path: '/', name: 'Home-item', component: Home },
  { path: '/History-item', name: 'history-item', component: History },
  { path: '/Geography-item', name: 'geography-item', component: Geography },
  { path: '/Stories-item', name: 'stories-item', component: Storie },
  { path: '/Author-item', name: 'author-item', component: Author },
  { path: '/Sale-item', name: 'sale-item', component: Sale },
  {
    path: '/Component-stories-item/:id',
    component: Component,
    name: 'StoriesDetails', // <--- Este nombre debe ser igual al usado en router.push
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
