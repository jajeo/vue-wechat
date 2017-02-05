<template>
  <header class="app-header">
    <index-header></index-header>
  </header>
  
</template>

<script>
import store from './vuex/store'
import indexHeader from './components/j-index-header'

require('./assets/css/common.scss')
require('./assets/css/reset.css')
require('./assets/css/iconfont.css')

export default {
  store,
  components: {
    indexHeader
  }
}
</script>

<style>

</style>
