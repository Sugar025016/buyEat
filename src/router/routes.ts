export const constantRoute = [
  {
    path: '/',
    component: () => import('@/views/buy/index.vue'),
    name: 'buy',
    meta: {
      title: 'buy',
      hidden: false,
      icon: '',
    },
    redirect: '/BuyShops',
    children: [
      {
        path: '/BuyShops',
        component: () => import('@/components/BuyShops/src/index.vue'),
        name: 'BuyShops',
        meta: {
          title: '首页',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
      {
        path: '/BuyMember',
        component: () => import('@/components/BuyMember/src/index.vue'),
        meta: {
          title: 'BuyMember',
          hidden: false,
          icon: 'HomeFilled',
        },
        redirect: '/BuyMember/profile/:number',
        children: [
          {
            path: '/BuyMember/profile/:number',
            name: 'profile',
            component: () =>
              import('@/components/BuyMember/src/profile/index.vue'),
            meta: {
              title: 'profile',
              hidden: false,
              icon: 'HomeFilled',
            },
          },
          {
            path: 'changeProfile/:number',
            name: 'changeProfile',
            component: () =>
              import('@/components/BuyMember/src/changeProfile/index.vue'),
            meta: {
              title: 'changeProfile',
              hidden: false,
              icon: 'HomeFilled',
            },
          },
          {
            path: 'changeCompany/:number',
            name: 'changeCompany',
            component: () =>
              import('@/components/BuyMember/src/changeCompany/index.vue'),
            meta: {
              title: 'changeCompany',
              hidden: false,
              icon: 'HomeFilled',
            },
          },
          {
            path: 'changePassword/:number',
            name: 'changePassword',
            component: () =>
              import('@/components/BuyMember/src/changePassword/index.vue'),
            meta: {
              title: 'changePassword',
              hidden: false,
              icon: 'HomeFilled',
            },
          },
          {
            path: 'love/:number',
            name: 'love',
            component: () =>
              import('@/components/BuyMember/src/love/index.vue'),
            meta: {
              title: 'love',
              hidden: false,
              icon: 'HomeFilled',
            },
          },
          {
            path: 'recommend/:number',
            name: 'recommend',
            component: () =>
              import('@/components/BuyMember/src/recommend/index.vue'),
            meta: {
              title: 'recommend',
              hidden: false,
              icon: 'HomeFilled',
            },
          },
        ],
      },
      {
        path: 'BuyOrder',
        name: 'BuyOrder',
        component: () => import('@/components/BuyOrder/src/index.vue'),
        meta: {
          title: 'BuyOrder',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
      {
        path: 'BuyShop',
        name: 'BuyShop',
        component: () => import('@/components/BuyShop/src/index.vue'),
        meta: {
          title: 'BuyShop',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
      {
        path: 'BuyShopCar',
        name: 'BuyShopCar',
        component: () => import('@/components/BuyShopCar/src/index.vue'),
        meta: {
          title: 'BuyShopCar',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/Login',
    component: () => import('@/views/loginRegister/index.vue'),
    meta: {
      title: 'loginRegister',
      hidden: false,
      icon: 'HomeFilled',
    },
    redirect: '/Login',
    children: [
      {
        path: '/Login',
        component: () => import('@/components/Login/src/index.vue'),
        meta: {
          title: 'Login',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
      {
        path: 'forgetPassword',
        component: () => import('@/components/ForgotPassword/src/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/Register',
    component: () => import('@/views/loginRegister/index.vue'),
    meta: {
      title: 'loginRegister',
      hidden: false,
      icon: 'HomeFilled',
    },
    redirect: '/Register',
    children: [
      {
        path: '/Register',
        component: () => import('@/components/Register/src/index.vue'),
        meta: {
          title: 'Register',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/Backstage',
    component: () => import('@/views/backstage/index.vue'),
    meta: {
      title: '後台',
      hidden: false,
      icon: 'HomeFilled',
    },
    redirect: '/Backstage/shops',
    children: [
      {
        path: '/Backstage/shops',
        component: () => import('@/components/BackstageShops/src/index.vue'),
        meta: {
          title: 'Shops',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
      {
        path: 'category',
        component: () => import('@/components/BackstageCategory/src/index.vue'),
        meta: {
          title: 'ategory',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true,
    },
  },
]



export const asyncRoute = [
  // {
  //   path: '/acl',
  //   component: () => import('@/layout/index.vue'),
  //   name: 'Acl',
  //   meta: {
  //     title: '权限管理',
  //     hidden: false,
  //     icon: 'Lock',
  //   },
  //   redirect: '/acl/user',
  //   children: [
  //     {
  //       path: '/acl/user',
  //       component: () => import('@/views/acl/user/index.vue'),
  //       name: 'User',
  //       meta: {
  //         title: '用户管理',
  //         hidden: false,
  //         icon: 'User',
  //       },
  //     },
  //     {
  //       path: '/acl/role',
  //       component: () => import('@/views/acl/role/index.vue'),
  //       name: 'Role',
  //       meta: {
  //         title: '角色管理',
  //         hidden: false,
  //         icon: 'Avatar',
  //       },
  //     },
  //     {
  //       path: '/acl/permission',
  //       component: () => import('@/views/acl/permission/index.vue'),
  //       name: 'Permission',
  //       meta: {
  //         title: '菜单管理',
  //         hidden: false,
  //         icon: 'List',
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/product',
  //   component: () => import('@/layout/index.vue'),
  //   name: 'Product',
  //   meta: {
  //     title: '商品管理',
  //     hidden: false,
  //     icon: 'Goods',
  //   },
  //   redirect: '/product/trademark',
  //   children: [
  //     {
  //       path: '/product/trademark',
  //       component: () => import('@/views/product/trademark/index.vue'),
  //       name: 'Trademark',
  //       meta: {
  //         title: '品牌管理',
  //         icon: 'ShoppingCart',
  //         hidden: false,
  //       },
  //     },
  //     {
  //       path: '/product/attr',
  //       component: () => import('@/views/product/attr/index.vue'),
  //       name: 'Attr',
  //       meta: {
  //         title: '属性管理',
  //         icon: 'Management',
  //         hidden: false,
  //       },
  //     },
  //     {
  //       path: '/product/spu',
  //       component: () => import('@/views/product/spu/index.vue'),
  //       name: 'Spu',
  //       meta: {
  //         title: 'Spu',
  //         icon: 'SetUp',
  //         hidden: false,
  //       },
  //     },
  //     {
  //       path: '/product/sku',
  //       component: () => import('@/views/product/sku/index.vue'),
  //       name: 'Sku',
  //       meta: {
  //         title: 'Sku',
  //         icon: 'ScaleToOriginal',
  //         hidden: false,
  //       },
  //     },
  //   ],
  // },
]
export const anyRoute = {
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  name: 'Any',
  meta: {
    title: '任意路由',
    hidden: true,
  },
}


