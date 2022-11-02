import { createRouter, createWebHistory } from 'vue-router'
import FirstPage from '@/components/FirstPage.vue'
import SecondPage from '@/components/SecondPage.vue'

const routes = [
    {
        path: '/',
        name: 'routerTestFirst',
        component: FirstPage
    },
    {
        path: '/second',
        name: 'routerTestSecond',
        component: SecondPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router