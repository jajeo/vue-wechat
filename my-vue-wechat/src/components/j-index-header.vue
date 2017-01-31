<template>
  <div class="_cover-top">
    <div class="other">
      <span class="iconfont icon-tips-jia"></span>
    </div>
    <div class="center">
      {{ menu_active.text }}
    </div>
  </div>
</template>

<script>
  export default {
    vuex: {
      getters: {
        menu_active: state => state.menu_active
      }
    },
    data () {
      return {
        menu_active: {
          text: '微信',
          index: 0
        }
      }
    }
  }
</script>

<style scoped>
  .center{
      margin: 0 auto;
      text-align: center;
    }
  .other {
    position: absolute;
    right: 15px;
  }
  .other .iconfont{
        font-size: 22px;
    }
</style>
