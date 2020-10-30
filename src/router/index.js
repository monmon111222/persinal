import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: 'Home' },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/education',
    name: 'Education',
    meta: { title: 'Education' },
    component: () => import('../views/Education.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    meta: { title: 'Portfolio' },
    component: () => import('../views/Portfolio.vue')
  },
  {
    path: '/workExperience',
    name: 'WorkExperience',
    meta: { title: 'WorkExperience' },
    component: () => import('../views/WorkExperience.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    meta: { title: 'Resume' },
    component: () => import('../views/Resume.vue')
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})
export default router
