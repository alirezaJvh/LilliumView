import Vue from 'vue'
import VueRouter from 'vue-router'

//  vue component
const app = () => import('@/App.vue')
const test = () => import('@/view/test')

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'app',
            component: app

        },
        {
            path: '/test',
            name: 'test',
            component: test
        }
    ]
})

