import { createRouter, createWebHistory } from 'vue-router'
import Top from '../js/Top.vue'
import Todo from '../components/WorkDetail/Todo.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router