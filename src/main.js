import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import i18n from './plugins/i18n'
import router from './router'

// import plugins
import './plugins'

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
