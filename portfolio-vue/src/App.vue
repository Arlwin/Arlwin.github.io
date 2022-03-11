<template>
  <v-app>
    <v-main class="background">
      <HomeView></HomeView>
    </v-main>
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
