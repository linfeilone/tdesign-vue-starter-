import { ViewModuleIcon, Edit1Icon, LayersIcon } from 'tdesign-icons-vue';
import Layout from '@/layouts/index.vue';

export default [
  {
    path: '/list',
    name: 'list',
    component: Layout,
    redirect: '/list/filter',
    meta: { title: '列表页', icon: ViewModuleIcon },
    children: [
      {
        path: 'base',
        name: 'ListBase',
        component: () => import('@/pages/list/base/index.vue'),
        meta: { title: '基础列表页' },
      },
      {
        path: 'filter',
        name: 'ListFilter',
        component: () => import('@/pages/list/filter/index.vue'),
        meta: { title: '筛选列表页' },
      },
      {
        path: 'tree',
        name: 'ListTree',
        component: () => import('@/pages/list/tree/index.vue'),
        meta: { title: '树状筛选列表页' },
      },
    ],
  },
  {
    path: '/form',
    name: 'form',
    component: Layout,
    redirect: '/form/base',
    meta: { title: '表单页', icon: Edit1Icon },
    children: [
      {
        path: 'base',
        name: 'FormBase',
        component: () => import('@/pages/form/base/index.vue'),
        meta: { title: '基础表单页' },
      },
      {
        path: 'step',
        name: 'FormStep',
        component: () => import('@/pages/form/step/index.vue'),
        meta: { title: '分步表单页' },
      },
    ],
  },
  {
    path: '/detail',
    name: 'detail',
    component: Layout,
    redirect: '/detail/base',
    meta: { title: '详情页', icon: LayersIcon },
    children: [
      {
        path: 'base',
        name: 'DetailBase',
        component: () => import('@/pages/detail/base/index.vue'),
        meta: { title: '基础详情页' },
      },
      {
        path: 'advanced',
        name: 'DetailAdvanced',
        component: () => import('@/pages/detail/advanced/index.vue'),
        meta: { title: '多卡片详情页' },
      },
      {
        path: 'deploy',
        name: 'DetailDeploy',
        component: () => import('@/pages/detail/deploy/index.vue'),
        meta: { title: '数据详情页' },
      }
    ],
  },
  {
    path: '/result',
    name: 'result',
    component: Layout,
    redirect: '/result/success',
    meta: { title: '结果页', icon: 'check-circle' },
    children: [
      {
        path: '403',
        name: 'Result403',
        component: () => import('@/pages/result/403/index.vue'),
        meta: { title: '无权限' },
      },
      {
        path: '404',
        name: 'Result404',
        component: () => import('@/pages/result/404/index.vue'),
        meta: { title: '访问页面不存在页' },
      },
      {
        path: '500',
        name: 'Result500',
        component: () => import('@/pages/result/500/index.vue'),
        meta: { title: '服务器出错页' },
      },
    ],
  },
];
