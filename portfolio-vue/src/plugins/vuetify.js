import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    
    theme: {
        themes: {
          light: {
            background: "#005C70",
            accent: "#00955C"
          },
        },
      }
});
