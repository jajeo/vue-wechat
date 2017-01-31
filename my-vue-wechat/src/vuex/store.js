import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  menu_active: {
    text: '微信',
    index: 0
  }
}

export default new Vuex.Store({
  state
})
