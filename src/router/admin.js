import Dashboard from '@/views/admin/Dashboard.vue';
import CreatePost from '@/views/admin/CreatePost.vue';

export default [
    { path: '/admin', component: Dashboard },
    { path: '/admin/create', component: CreatePost },
]