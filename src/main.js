import '@babel/polyfill'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

Vue.use(VueFire)
// Initialize Firebase
var config = {
  apiKey: "AIzaSyChSDCSwf1gyr8o42IiY74U58XMJAFLsHI",
  authDomain: "address-book-bcc3e.firebaseapp.com",
  databaseURL: "https://address-book-bcc3e.firebaseio.com",
  projectId: "address-book-bcc3e",
  storageBucket: "address-book-bcc3e.appspot.com",
  messagingSenderId: "983030878352"
};
firebase.initializeApp(config);

export const db = firebase.firestore()
export const auth = firebase.auth()
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  // Initialize the app only when we are sure Firebase Auth object is ready to use
  beforeCreate: function() {
   firebase.auth().onAuthStateChanged(function(user) {
     console.log('auth change', user)
     if (user) {
       store.dispatch(SET_USER, {user})
     }
   }.bind(this))
  },
  components: { App },
  template: '<App/>'
})
