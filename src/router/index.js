import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: 'Bonnie | Front-end Developer' },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/education',
    name: 'Education',
    meta: { title: 'Bonnie | Education' },
    component: () => import('../views/Education.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    meta: { title: 'Bonnie | Portfolio' },
    component: () => import('../views/Portfolio.vue')
  },
  {
    path: '/workExperience',
    name: 'WorkExperience',
    meta: { title: 'Bonnie | WorkExperience' },
    component: () => import('../views/WorkExperience.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    meta: { title: 'Bonnie | Resume' },
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
