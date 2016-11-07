import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import {Time} from './time';

Vue.use(Vuex);
Vue.use(VueResource);

const state = {
    view: 'tabela',
    times: []
};

const mutations = {
    'set-times'(state, times){
        state.times = times;
    },
    update(state, time){
        let index = state.times.findIndex(element => time.id == element.id);
        if (index != -1) {
            state.times[index] = time;
        }
    },
    'show-time-list'(state){
        state.view = 'tabela';
    },
    'show-time-novojogo'(state){
        state.view = 'novojogo';
    },
    'show-time-zona'(state){
        state.view = 'zona';
    }
};

const actions = {
    'load-times'(context){
        Vue.http.get('http://localhost:8080/dist/times.json').then(response => {
            let times = response.data.map(element => new Time(element.id, element.nome, element.escudo));
            context.commit('set-times', times);
        });
    }
};

export default new Vuex.Store({
    state,
    getters: {
        timesLibertadores: state => state.times.slice(0, 6),
        timesRebaixados: state => state.times.slice(16, 20),
    },
    mutations,
    actions
});