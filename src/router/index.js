import Vue from 'vue'
import Router from 'vue-router'
import Index from './index.vue'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Example from '@/components/Example'

Vue.use(Router)
Vue.config.productionTip = false

var router = new Router({
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/about', name: 'About', component: About },
    { path: '/example', name: 'Example', component: Example },
  ]
})

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  components: { Index },
  template: '<Index/>'
})
