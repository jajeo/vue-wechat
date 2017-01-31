<template>
  <div class="_cover-top">
    <div class="other">
      <span class="iconfont icon-tips-jia" @click="tips_isOpen=!tips_isOpen"></span>
      <ul class="tips-menu" :class="tips_isOpen ? 'tips-open' : 'tips-close'">
        <li v-for="item in menuArr">
          <span class="iconfont" :class="item.iconClass"></span>
          <div>{{ item.text }}</div>
        </li>
      </ul>
      <a class="tips-maker" v-show="tips_isOpen"></a>
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
        },
        tips_isOpen: false,
        menuArr: [
          {_link: {path: 'create-group-chat'}, text: '发起群聊', iconClass: 'icon-tips-xiaoxi'},
          {_link: {path: 'add-friends'}, text: '添加朋友', iconClass: 'icon-tips-add-friend'},
          {_link: {path: 'sao-yi-sao'}, text: '扫一扫', iconClass: 'icon-tips-saoyisao'},
          {_link: {path: 'receipt-payment-money'}, text: '收付款', iconClass: 'icon-tips-fukuan'}
        ]
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
  .other .tips-menu{
      position: absolute;
      z-index:2;
      width:133px;
      font-size:16px;
      right: -10px;
      top: 54px;
      text-align: left;
      border-radius: 2px;
      background-color: #49484b;
      padding: 0 15px;
      transform-origin: 90% 0%;
    }
    .other .tips-menu li:not(:last-child)::after{
        content: "";
        width: 200%;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
        background-color: #5b5b5d;
        transform: scale(.5);
        transform-origin: 0 100%;
    }
    .other .tips-menu::before{
        width: 0;
        height: 0;
        position: absolute;
        top: -8px;
        right: 15px;
        content: "";
        border-width:0 6px 8px;
        border-color: rgba(0,0,0,0) rgba(0,0,0,0) #49484b rgba(0,0,0,0);
        border-style: solid;
    }
    .other .tips-menu li{
        position: relative;
        height: 40px;
        line-height: 40px;
    }
    .other .tips-menu .iconfont{
        float: left;
        font-size:16px;
        margin-right: 15px;
    }
    .tips-open{
        transition: initial;
        opacity: 1;
    }
    .tips-close{
        opacity: 0;
        transition: .2s opacity ease ,.6s transform ease;
        transform: scale(0);
    }
</style>
