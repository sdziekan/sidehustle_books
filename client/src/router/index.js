import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Books from '@/components/Books'
import Guests from '@/components/Guests'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/guests',
      name: 'Guests',
      component: Guests
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
    }
  ]
})
