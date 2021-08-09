import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/database'

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDKj6IIaRk64gAm5vgAY1U9QMgv6xNe9_w",
  authDomain: "development-8ca9b.firebaseapp.com",
  projectId: "development-8ca9b",
  storageBucket: "development-8ca9b.appspot.com",
  messagingSenderId: "897313814578",
  appId: "1:897313814578:web:e70a8bb7d9f957562fe42b"
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
