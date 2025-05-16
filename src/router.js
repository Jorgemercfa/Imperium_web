import { createWebHashHistory, createRouter } from 'vue-router';
import Home from './views/Home-item.vue';
import History from './views/History-item.vue';
import Geography from './views/Geography-item.vue';
import Author from './views/Author-item.vue';
import Sale from './views/Sale-item.vue';

const routes = [
  { path: '/', name: 'Home-item', component: Home },
  { path: '/History-item', name: 'history-item', component: History },
  { path: '/Geography-item', name: 'geography-item', component: Geography },
  { path: '/Author-item', name: 'author-item', component: Author },
  { path: '/Sale-item', name: 'sale-item', component: Sale },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
