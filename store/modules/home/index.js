import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
    paginateCards: null,
    allCards: null,
    detailModal: false,
    total: 0,
    params:{
        totalPages: 0,
        page: 1,
        limit: 3,
        search: '',
        filter: ''
    }
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}