import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
    accessToken: null,
    userId: null,
    currentUser: {
        displayName: null,
        email: null,
        emailVerified: null,
        phoneNumber: null,
        photoURL: null,
    }
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}