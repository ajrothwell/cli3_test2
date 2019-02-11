import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle } from '@fortawesome/pro-solid-svg-icons/faInfoCircle';
import { faExternalLink } from '@fortawesome/pro-solid-svg-icons/faExternalLink';
library.add(faInfoCircle, faExternalLink);
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.component('font-awesome-icon', FontAwesomeIcon);

import '../node_modules/phila-standards/dist/css/phila-app.min.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
