import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import actions from './action.js';
import mutation from './mutation.js';
export default new Vuex.Store({
    modules:{
        mutation
    },

    actions

});
