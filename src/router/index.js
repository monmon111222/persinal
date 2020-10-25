import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: 'Home' },
    component: Home
  },
  {
    path: '/education',
    name: 'Education',
    meta: { title: 'Education' },
    component: () => import(/* webpackChunkName: "about" */ '../views/Education.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    meta: { title: 'Portfolio' },
    component: () => import(/* webpackChunkName: "about" */ '../views/Portfolio.vue')
  },
  {
    path: '/workExperience',
    name: 'WorkExperience',
    meta: { title: 'WorkExperience' },
    component: () => import(/* webpackChunkName: "about" */ '../views/WorkExperience.vue')
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
