export default [
  {
    path: '/loginRedirect',
    name: 'loginRedirect',
    meta: {
      title: '登录页',
      icon: 'logout',
      hidden: true,
    },
    component: () => import('@/pages/login/index.vue'),
    children: [
      {
        path: 'index',
        redirect: '/login',
        component: () => import('@/layouts/blank.vue'),
        meta: { title: '登录中心' },
      },
    ],
  },
  // 三级菜单配置
  // {
  //   path: '/menu',
  //   name: 'menu',
  //   component: Layout,
  //   meta: { title: '一级菜单', icon: 'menu-fold' },
  //   children: [
  //     {
  //       path: 'second',
  //       meta: { title: '二级菜单' },
  //       component: () => import('@/layouts/blank.vue'),
  //       children: [
  //         {
  //           path: 'third',
  //           name: 'NestMenu',
  //           component: () => import('@/pages/nest-menu/index.vue'),
  //           meta: { title: '三级菜单' },
  //         },
  //       ],
  //     },
  //   ],
  // },
];
