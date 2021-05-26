import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import firebase from 'firebase/app'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCgNif-sfiNmW14hRpF4Rgvx0qTn6r99LM',
  authDomain: 'new-cc.firebaseapp.com',
  projectId: 'new-cc',
  storageBucket: 'new-cc.appspot.com',
  messagingSenderId: '1091642304922',
  appId: '1:1091642304922:web:837dcaae7513e067d1b223',
  measurementId: 'G-2DT1SGBBTP',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
