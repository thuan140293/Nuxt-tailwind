async function getPaginateCards(context, request) {
    let page = context.state.params.page,
        limit = context.state.params.limit,
        search = context.state.params.search,
        filter = context.state.params.filter;
    let response = await this.$axios.get(`Cards?page=${page}&limit=${limit}&search=${search}&filter=${filter}`);
    await context.commit('SET_CARD_PAGINATION', response.data);
    return response;
}

async function getAllCards(context, request) {
    let response = await this.$axios.get("Cards");
    await context.commit('SET_CARD_ALL', response.data);
    return response;
}

async function search(context, request){
    await context.commit('SET_SEARCH', request);
}

async function filter(context, request){
    await context.commit('SET_FILTER', request);
}

function openDetailModal(context, request){
    context.commit('SET_MODAL');
}

export default{
    getAllCards,
    getPaginateCards,
    openDetailModal,
    search,
    filter
}