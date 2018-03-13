import Vue from 'vue'
import Vuex from 'vuex'

import {DELETE_ITEM, EDIT_ITEM, SET_ITEMS} from './mutation-types'
import {SET_QUESTIONS} from './mutation-types'

Vue.use(Vuex)


interface IQuestionState {
  projects: IQuestion[],
  loading: boolean;
}
export interface IQuestion {
  name: string;
}

export default new Vuex.Store({
  state: {
    items: [],
    questions:[],
    loading: true,
    isLoggedIn:false,
    questionEmail:'',
    questionIndustryId:0
  },
  mutations: {
    [SET_QUESTIONS](state, payload) {
      state.questions = payload;
      state.loading = false;
    },


    [SET_ITEMS](state, payload) {
      state.items = payload;
      state.loading = false;
    },
    [DELETE_ITEM](state, index: number) {
      state.items.splice(index, 1)
    },
    [EDIT_ITEM](state, payload) {
      Vue.set(state.items, payload.index, payload.item)
    },
  },
})
