import Vue from 'vue'
import VueRouter from 'vue-router'

//  vue component
const app = () => import('@/view/test.vue')
// const test = () => import('@/view/test.vue')

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'app',
            component: app

        },
        // {
        //     path: '/test',
        //     name: 'test',
        //     component: test
        // }
    ]
})

