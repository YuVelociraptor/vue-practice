import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import AboutPage01 from '@/components/AboutPage01.vue'
import AboutPage02 from '@/components/AboutPage02.vue'
import AboutPage03 from '@/components/AboutPage03.vue'

const routes = [
    {
        path: '/',
        name: 'routerTestFirst',
        component: HomePage
    },
    {
        path: '/01',
        name: 'First',
        component: AboutPage01
    },
    {
        path: '/02',
        name: 'Second',
        component: AboutPage02
    },
    {
        path: '/03',
        name: 'Third',
        component: AboutPage03
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router