import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: 'KEY',
  authDmain: 'DOMAIN.firebaseapp.com',
  databaseURL: 'DOMAIN.firebaseio.com',
  projectId: 'ID',
  storageBucket: 'BUCKET_ID.appspot.com',
  messageingSenderId: 'SENDER_ID'
}
firebase.initializeApp(config)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
