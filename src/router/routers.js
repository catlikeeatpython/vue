const routes = [
  {
      path: '/',
      name: 'HelloWorld', // 命名路由 ------  动态传参
     components: {
          header: () => import(/* webpackChunkName: "group-foo" */ './Foo.vue'),
          default: () => import(/* webpackChunkName: "group-foo" */ './Foo.vue'),
          footer: () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
          }
      }
  }
]