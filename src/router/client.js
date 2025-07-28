import Home from '@/views/client/Home.vue';
import PostDetail from '@/views/client/PostDetail.vue';
import ClientPostList from '@/views/client/ClientPostList.vue';
import ClientPostCreate from '@/views/client/ClientPostCreate.vue';
import ClientPostEdit from '@/views/client/ClientPostEdit.vue';

export default [
    { path: '/', name: 'Home', component: Home },
    { path: '/posts/:id', name: 'PostDetail', component: PostDetail, props: true },
    { path: '/posts', name: 'ClientPostList', component: ClientPostList },
    { path: '/posts/create', name: 'ClientPostCreate', component: ClientPostCreate },
    { path: '/posts/edit/:id', name: 'ClientPostEdit', component: ClientPostEdit },
]