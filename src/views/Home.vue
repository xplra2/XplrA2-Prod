<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button class='button' v-on:click='createUser'>Click me to create a user</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import firebase from 'firebase';

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    createUser: function(){
      console.log("clicked function")
      firebase.auth().createUserWithEmailAndPassword('test1@umich.edu', "thisismypassword1234")
      .catch(function() {
        console.log("invalid signup credentials"); 
      });
    }
  },
}
</script>
