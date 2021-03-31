const getAllCards = (state, getters, rootState) => {
    var data = {};
    if (state.allCards) {
      var data = state.allCards.map( (v) => {
        return v;
      });
    }
    return data;
};

const getPaginateCards = (state, getters, rootState) => {
    var data = {};
    if (state.paginateCards) {
      var data = state.paginateCards.map( (v) => {
        return v;
      });
      data.limit = state.params.limit;
      if(state.allCards && state.allCards.length){
        data.total = state.allCards.length;
      }
      data.totalPages = Math.ceil(data.total / data.limit);
    }
    return data;
};

export default{
    getAllCards,
    getPaginateCards
}