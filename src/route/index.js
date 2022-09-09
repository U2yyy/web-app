import VueRouter from "vue-router"
import home from "../pages/home"
import matches from "@/pages/matches"
import rank from "@/pages/rank"
import result from "@/pages/result"
import teams from "@/pages/teams"

export default new VueRouter({
    routes:[
        {
            path:'/home',
            component: home
        },
        {
            path:'/matches',
            component: matches
        },
        {
            path:'/rank',
            component: rank
        },
        {
            path:'/result',
            component: result
        },
        {
            path:'/teams',
            component: teams
        }
    ]
})