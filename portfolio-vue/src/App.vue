<template>
  <v-app>
    <v-main class="background">
      <HomeView></HomeView>
    </v-main>
    <v-footer
      class="d-flex"
      color="accent"
      padless
    >
    <!-- <span class="text-caption px-1 white--text">Arlwin Fajardo @ Github Pages - 2022</span> -->
    <span class="text-caption px-1 white--text">Work In Progress</span>
    <v-spacer></v-spacer>
    <span class="text-caption px-1 white--text">Illustrations used: <a white--text href="https://icons8.com">Icons8</a></span>
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import HomeView from './components/HomeView';

export default {
  name: 'App',

  components: {
    HomeView,
  },

  data: () => ({
  }),
};
</script>

<style scoped>

a, a:visited, a:hover, a:active { 
  color: white; 
  text-decoration:none;  
} 

</style>
