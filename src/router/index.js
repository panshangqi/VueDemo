import Vue from 'vue'
import Router from 'vue-router'
import Index from './index.vue'
import HelloWorld from '@/pages/HelloWorld'
import About from '@/pages/About'
import Example from '@/pages/Example'
import ComponentDemo from '@/pages/ComponentDemo'

Vue.use(Router)
Vue.config.productionTip = false

var router = new Router({
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/about', name: 'About', component: About },
    { path: '/example', name: 'Example', component: Example },
    { path: '/component_demo', name: 'ComponentDemo', component: ComponentDemo },
  ]
})

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  components: { Index },
  template: '<Index/>'
})
