const state = {
    recommendList: [],
    hotRankingList: [],
    searchList: []
};

const actions = {

};

const mutations = {
    MUSIC_LIST_RECOMMEND(state, payload) {
        state.recommendList = payload;
    },
    MUSIC_LIST_HOTRANKING(state, payload) {
        state.hotRankingList = payload;
    },
    MUSIC_LIST_SEARCH(state, payload) {
        state.searchList = payload;
    }
};

export default {
    namespaced : true,
    state,
    actions,
    mutations
}