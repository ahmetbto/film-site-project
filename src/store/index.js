import { createStore } from 'vuex';

export default createStore({
  state: {
    filmList: '',
  },
  mutations: {
    filmMutation(state, value) {
      state.filmList = value;
    },
  },
  actions: {},
  modules: {},
});
