<template>
  <v-app>

    <toolbar></toolbar>


    <lilium-footer></lilium-footer>


  
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Toolbar from './components/basic/Toolbar'
import LiliumFooter from './components/basic/Footer'


export default {
  name: 'App',
  components: {
    Toolbar,
    LiliumFooter
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/index.scss';
</style>



