import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import UserList from './UserList.vue'
import UserDetails from './UserDetails.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/users' }, // localhost:8080/
  { path: '/users', component: UserList }, // localhost:8080/user
  { path: '/users/:id', component: UserDetails } // localhost:8080/users/1
]

Vue.config.productionTip = false
const router = new VueRouter({
  routes: routes
})

Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
}).$mount('#app')
