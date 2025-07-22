import Home from '@/views/client/Home.vue';
import PostDetail from '@/views/client/PostDetail.vue';
import ClientPostList from '@/views/client/ClientPostList.vue';
import ClientPostCreate from '@/views/client/ClientPostCreate.vue';
import ClientPostEdit from '@/views/client/ClientPostEdit.vue';

export default [
    { path: '/', component: Home },
    { path: '/post/:id', component: PostDetail, props: true },
    { path: '/posts', component: ClientPostList },
    { path: '/posts/create', name: 'ClientPostCreate', component: ClientPostCreate },
    { path: '/posts/edit/:id', name: 'ClientPostEdit', component: ClientPostEdit },
]