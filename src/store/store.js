import Vue from "vue";
import Vuex from "vuex"
Vue.use(Vuex);
//we add the state
const store=new Vuex.Store({
    state:{
        videos:[]
    },
    getters:{
        getAllVideos(state){
            return  state.videos;
        },
        getFavorites(state){
            //once we fill the videos no need the second request just filter
            return state.videos.filter(x=> x.favorite===true);
        }
    },
    mutations:{},
    actions:{}
})
export  default  store