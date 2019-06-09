import Vue from 'vue'
// import App from './App.vue'
import Home from './views/Home.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// import '../node_modules/bulma/css/bulma.css'
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAyDf8SscMFHHtxIP35NSVqkfbxTrEVCaM",
  authDomain: "xplra2.firebaseapp.com",
  databaseURL: "https://xplra2.firebaseio.com",
  projectId: "xplra2",
  storageBucket: "xplra2.appspot.com",
  messagingSenderId: "522767696585",
  appId: "1:522767696585:web:9131abc3e8dd0172"
};

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(Home)
}).$mount('#entrypoint')