import { createRouter, createWebHistory } from 'vue-router'
import Top from '../js/Top.vue'
import Todo from '../components/WorkDetail/Todo.vue'
import Rese from '../components/WorkDetail/Rese.vue'
import Sns from '../components/WorkDetail/Sns.vue'
import Terrast from '../components/WorkDetail/Terrast.vue'
import Portfolio from '../components/WorkDetail/Portfolio.vue'

const routes = [
  {
    path: '/',
    name: 'Top-name',
    component: Top
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/rese',
    name: 'Rese',
    component: Rese
  },
  {
    path: '/sns',
    name: 'Sns',
    component: Sns
  },
  {
    path: '/terrast',
    name: 'Terrast',
    component: Terrast
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
})

export default router