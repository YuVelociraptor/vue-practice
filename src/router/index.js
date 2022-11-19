import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/PageHome.vue'
import Page01 from '@/components/AboutPage01.vue'
import Page02 from '@/components/AboutPage02.vue'
import Page03 from '@/components/AboutPage03.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/01',
        name: 'Page01',
        component: Page01
    },
    {
        path: '/02',
        name: 'Page02',
        component: Page02
    },
    {
        path: '/03',
        name: 'Page03',
        component: Page03
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router