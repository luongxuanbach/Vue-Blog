import Dashboard from '@/views/admin/Dashboard.vue';
import CreatePost from '@/views/admin/CreatePost.vue';
import EditPost from '@/views/admin/EditPost.vue';

export default [
    { path: '/admin', component: Dashboard },
    { path: '/admin/create', component: CreatePost },
    { path: '/admin/edit/:id', component: EditPost, props: true },
]