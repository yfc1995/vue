
import userStore from './user/index';
import shopStore from './shop/index'
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    userStore,
    shopStore
  }

})

export default store;