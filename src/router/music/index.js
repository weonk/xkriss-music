export default {
    path: '/xkriss',
    name: 'xkriss',
    component: () => import('@/views/Music'),
    children: [
        {
            path: 'recommend',
            name: 'recommend',
            component: () => import('@/components/Recommend')
        },
        {
            path: 'hotRanking',
            name: 'hotRanking',
            component: () => import('@/components/HotRanking')
        },
        {
            path: 'search',
            name: 'search',
            component: () => import('@/components/Search')
        },
        {
            path: '/xkriss',
            redirect: '/xkriss/recommend'
        }
    ]
}