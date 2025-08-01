import ClientLayout from '@/layouts/ClientLayout.vue'
import Home from '@/views/client/Home.vue'
import PostDetail from '@/views/client/PostDetail.vue'
import ClientPostList from '@/views/client/ClientPostList.vue'
import ClientPostCreate from '@/views/client/ClientPostCreate.vue'
import ClientPostEdit from '@/views/client/ClientPostEdit.vue'
import Login from '@/views/client/LoginPage.vue'
import ForgotPassword from '@/views/client/ForgotPassword.vue'
import SignupPage from '@/views/client/SignupPage.vue'
import About from '@/views/client/About.vue'

export default [
  // ✅ Các trang không cần layout
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'Signup', component: SignupPage },
  { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword },

  // ✅ Các trang dùng layout
  {
    path: '/',
    component: ClientLayout,
    children: [
      { path: '', name: 'Home', component: Home },
      { path: 'posts', name: 'ClientPostList', component: ClientPostList },
      { path: 'posts/create', name: 'ClientPostCreate', component: ClientPostCreate },
      { path: 'posts/edit/:id', name: 'ClientPostEdit', component: ClientPostEdit },
      { path: 'posts/:id', name: 'PostDetail', component: PostDetail, props: true },
      { path: 'about', name: 'About', component: About },
    ]
  }
]
