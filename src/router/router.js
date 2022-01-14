import Vue from "vue"
import VueRouter from "vue-router"
import FavoritesPage from "@/Views/FavoritesPage";
import MainPage from "@/Views/MainPage";
import WatchPage from "@/Views/WatchPage";
Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/main", component: MainPage },
        { path: "/favorites/:userid", component: FavoritesPage },
        { path: "/watch", component: WatchPage }

    ]
});
export  default  router;