import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import List from "@/views/students/List.vue";
import Add from "@/views/students/Add.vue";
import Edit from "@/views/students/Edit.vue";
import View from "@/views/students/View.vue";
import PageNotFound from "@/views/PageNotFound.vue";
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
      component: AboutView
    },
    {
      path: '/student',
      name: 'student',
      component: List
    },
    {
      path: '/student/add',
      name: 'add',
      component: Add
    },
    {
      path: '/student/view/:id',
      name: 'view',
      component: View
    },
    {
      path: '/student/edit/:id',
      name: 'edit',
      component: Edit
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: PageNotFound
    },
  ]
})

export default router
