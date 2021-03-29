const SET_CARD_ALL = (state, payload) =>{
  state.allCards = payload;
}

const SET_SEARCH = (state, payload) =>{
  state.params.search = payload;
}

const SET_FILTER = (state, payload) =>{
  state.params.filter = payload;
}

const SET_CARD_PAGINATION = (state, payload) =>{
  state.paginateCards = payload;
}

const SET_MODAL = (state) =>{
  state.detailModal = true;
}

export default{
  SET_CARD_ALL,
  SET_CARD_PAGINATION,
  SET_MODAL,
  SET_SEARCH,
  SET_FILTER
}