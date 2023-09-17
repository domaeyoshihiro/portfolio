import { createRouter, createWebHistory } from 'vue-router'
import Top from '../js/Top.vue'
import Todo from '../components/WorkDetail/Todo.vue'
import Rese from '../components/WorkDetail/Rese.vue'
import Sns from '../components/WorkDetail/Sns.vue'
import Terrast from '../components/WorkDetail/Terrast.vue'


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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router