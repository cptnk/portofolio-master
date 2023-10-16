import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cv from '@/components/Cv'
import Imprint from '@/components/Imprint'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
        path: '/cv',
        name: 'Cv',
        component: Cv
    },
      {
          path: '/imprint',
          name: 'Imprint',
          component: Imprint
      }
  ]
})
