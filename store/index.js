import Vuex from 'vuex'
import homeModule from './modules/home'

const createStore = () => {
  return new Vuex.Store({
    state: {
     
    },
    modules: {
      home: homeModule,
    },
    actions: {
      
    },
    mutations: {
    
    },
  })
}

export default createStore
