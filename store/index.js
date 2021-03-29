import Vuex from 'vuex'
import homeModule from './modules/home';
import authModule from './modules/auth';

const createStore = () => {
  return new Vuex.Store({
    state: {
     
    },
    modules: {
      home: homeModule,
      auth: authModule,
    },
    actions: {
      
    },
    mutations: {
    
    },
  })
}

export default createStore
