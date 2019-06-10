import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)




let state={
  SortKey:'A',
  CityName: '北京',
}
if(localStorage&&localStorage.CityName){
  state.CityName = localStorage.CityName
}
export default new Vuex.Store({
  state,
  mutations: {
    changSorts(state,params){
      state.SortKey = params
    },
    changeCitys(state,params){
      state.CityName = params
      localStorage.CityName = params
    }
  },
  
  actions: {
    changSort({commit},params){
      commit('changSorts',params)
    },
    changeCity({commit},params){
      commit('changeCitys',params)
    }
  }
})
