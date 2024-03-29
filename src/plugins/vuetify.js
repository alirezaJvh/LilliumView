import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import '@mdi/font/css/materialdesignicons.css'
import theme from './theme'

Vue.use(Vuetify, {
  iconfont: 'mdi',
  rtl: true,
  theme
})
