import Vue from 'vue';
import VueApollo from 'vue-apollo';

import apolloClient from './apollo';
import App from './App.vue';

Vue.use(VueApollo, { apolloClient });

new Vue({
  el: '#app',
  render: h => h(App)
})
