// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// import the hello component
import Hello from './components/Hello'
import About from './components/About'
import Param from './components/Param'
import ParamDetails from './components/ParamDetails'
// tell vue to use the router
const routes = [
  // define the root url of the application
  { path: '/', component: Hello },
  { path: '/about', component: About },
  { path: '/param', component: Param },
  { path: '/ParamDetails/:id', component: ParamDetails, name: 'ParamDetails'}
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now
const router = new VueRouter({
  routes,
  mode: 'history'
})

//place the router guard
router.beforeEach((to, from, next) => {
  if(to.path == '/param'){
    if(localStorage.getItem('user')==undefined){
      var user = prompt('please enter your username');
      var pass = prompt('please enter your password');
      console.log(user);
      console.log(pass);
      if (user == 'username' && pass == 'password'){
        localStorage.setItem('user', user);
        next();
      }else{
        alert('Wrong username and password, you do not have permission to access that route');
        return;
      }
      
    }
    
  }
   next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')
