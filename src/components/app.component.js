import TimeListComponent from './time-list.component';
import TimeJogoComponent from './time-jogo.component';
import TimeZonaComponent from './time-zona.component';
import store from '../store';

export default {
    components: {
        'time-list': TimeListComponent,
        'time-jogo': TimeJogoComponent,
        'time-zona': TimeZonaComponent
    },
    template: `
      <div class="container">
          <div class="row">
            <h3>Campeonato Brasileiro - Série A - 2016</h3>
            <a class="btn btn-primary" @click="showTabela">Ver tabela</a>
            <a class="btn btn-primary" @click="showNovoJogo">Novo jogo</a>
            <a class="btn btn-primary" @click="showZona">Ver zona</a>
            <br/><br/>
            <div v-if="view == 'tabela'">
                <time-list></time-list>
            </div>
            <div v-if="view == 'novojogo'">
               <time-jogo></time-jogo>
            </div>
            <div v-if="view == 'zona'">
               <time-zona></time-zona>
            </div>
          </div>
    </div>
    `,
    computed:{
        view(){
            return store.state.view;
            //return this.$store.state.view;
        }
    },
    methods: {
        showTabela(){
            store.commit('show-time-list');
        },
        showNovoJogo(){
            store.commit('show-time-novojogo');
        },
        showZona(){
            store.commit('show-time-zona');
        }
    }
};