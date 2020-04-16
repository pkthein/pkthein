
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: 'me' },
      { path: 'me', component: () => import('pages/Index.vue') },
      { path: 'projects', component: () => import('pages/Projects.vue') },
      { path: 'resume', component: () => import('pages/Resume.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
