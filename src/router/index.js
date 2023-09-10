import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Todo from '../components/WorkDetail/Todo.vue'

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
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