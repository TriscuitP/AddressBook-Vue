import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/Home'
import {auth} from '../main'
import 'firebase/auth';

Vue.use(Router)

function requireAuth(to, from, next) {
  if (!auth.currentUser) {
    next({
      path: '/Login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

// Defines all routes of application
export default new Router({
  routes: [
    // Redirect to Login page
    {path: '*', redirect:'/'},
    {path: '/', redirect: '/Login'},
    {path: '/Login', name: 'Login', component: Login},
    {path: '/Register', name: 'Register', component: Register},
    // Access the app only with authentication
    {path: '/Home', name: 'Home', component: Home, beforeEnter: requireAuth}
  ]
})
