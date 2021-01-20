import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import A from '../views/a.vue'
import C from '../views/c.vue'
import D from '../views/d.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/c',
    name:'C',
    component: C
  },
  {
    path: '/d',
    component: D
  },
  {
    path: '/a/:id',
    component: A,
    children:[{
      path:'/b',
      component:()=>import('../views/b.vue')
    }]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
