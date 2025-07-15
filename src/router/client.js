import Home from '@/views/client/Home.vue';
import PostDetail from '@/views/client/PostDetail.vue';

export default [
    { path: '/', component: Home },
    { path: '/post/:id', component: PostDetail, props: true }
]