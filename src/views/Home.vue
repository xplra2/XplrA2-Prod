<template>
  <div class="App"/>
</template>

<script>
// @ is an alias to /src
import gmapsInit from '@/utils/gmaps.js';
import firebase from 'firebase';


export default {
  name: 'App',
  data: function() {
    return {
      homeMap: null,
    }
  },
  methods: {
    createUser: function(){
      console.log("clicked function")
      firebase.auth().createUserWithEmailAndPassword('test1@umich.edu', "thisismypassword1234")
      .catch(function() {
        console.log("invalid signup credentials"); 
      });
    },
  },

  async mounted() {
        try {
      const google = await gmapsInit();
      const geocoder = new google.maps.Geocoder();
      const map = new google.maps.Map(this.$el);

      geocoder.geocode({ address: 'Austria' }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status);
        }

        map.setCenter(results[0].geometry.location);
        map.fitBounds(results[0].geometry.viewport);
      });
    } catch (error) {
      console.error(error);
    }
  },
};



</script>


<style>
html,
body {
  margin: 0;
  padding: 0;
}

.App {
  width: 100vw;
  height: 100vh;
}
</style>
