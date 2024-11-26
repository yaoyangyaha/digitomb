import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
      name: "HomeView",
      meta: { title: "首页" }
    }
  ],
})

router.beforeEach((to, _from, next) => {
  document.title = to.meta.title as string
  next()
})

export default router
