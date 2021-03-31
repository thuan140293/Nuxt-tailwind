const getCurrentUser = (state, getters, rootState) => {
    var data = {};
    if(state.currentUser){
        data = state.currentUser;
    }
    return data;
};


export default{
    getCurrentUser
}