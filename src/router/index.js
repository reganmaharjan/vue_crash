import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.Base_URL,
    routes: [
        {
            path: '/',
            name: 'about',
            component: About
        }
    ]

})