import Dashboard from '@/views/admin/Dashboard.vue';
import CreatePost from '@/views/admin/CreatePost.vue';
import EditPost from '@/views/admin/EditPost.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';

export default [
    {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true, requiresAdmin: true },
    children: [
      {
        path: '',
        name: 'AdminDashboard',
        component: Dashboard
      },
      {
        path: 'create',
        name: 'CreatePost',
        component: CreatePost
      },
      {
        path: 'edit/:id',
        name: 'EditPost',
        component: EditPost,
        props: true
      }
    ]
  }
]