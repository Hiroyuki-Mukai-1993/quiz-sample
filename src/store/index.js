import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      message: 'Hello Vuex',
      num: 5
  },
  getters: {
    num : function(state){
        return state.num
    },
    message : function(state){
        if (state.num > 7) {
            state.message = 'すごい！'
        } else {
            state.message = '残念！'
        }

        return state.message
    }
  },
  mutations: {
    addNum : function(state, num) {
        state.num += num
    },
    clear: function(state){
		state.num = 0
	}
  },
  actions: {
    addNum: function(context, num){
		context.commit('addNum', num)
	},
    clear: function(context){
		context.commit('clear')
	}
  }
})