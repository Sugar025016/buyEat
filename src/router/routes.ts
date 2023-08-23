export const constantRoute = [
  {
    path: '/',
    component: () => import('@/views/buy/index.vue'),
    name: 'home',
    meta: {
      title: 'buy',
      hidden: false,
      icon: '',
      mustToken: false,
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
          mustToken: false,
        },
      },
      {
        path: '/BuyMember',
        component: () => import('@/components/BuyMember/src/index.vue'),
        meta: {
          title: 'BuyMember',
          hidden: false,
          icon: 'HomeFilled',
          mustToken: true,
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
              mustToken: true,
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
              mustToken: true,
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
              mustToken: true,
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
              mustToken: true,
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
              mustToken: true,
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
              mustToken: true,
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
          mustToken: true,
        },
      },
      {
        path: 'BuyShop/:id',
        name: 'BuyShop',
        component: () => import('@/components/BuyShop/src/index.vue'),
        meta: {
          title: 'BuyShop',
          hidden: false,
          icon: 'HomeFilled',
          mustToken: false,
        },
      },
      {
        path: 'BuyShopCart',
        name: 'BuyShopCart',
        component: () => import('@/components/BuyShopCart/src/index.vue'),
        meta: {
          title: 'BuyShopCart',
          hidden: false,
          icon: 'HomeFilled',
          mustToken: true,
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
      mustToken: false,
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
          mustToken: false,
        },
      },
      {
        path: 'forgetPassword',
        component: () => import('@/components/ForgotPassword/src/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
          icon: 'HomeFilled',
          mustToken: false,
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
      mustToken: true,
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
          mustToken: true,
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
      mustToken: true,
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
          mustToken: true,
        },
      },
      {
        path: '/Backstage/users',
        component: () => import('@/components/BackstageUser/src/index.vue'),
        meta: {
          title: 'users',
          hidden: false,
          icon: 'HomeFilled',
          mustToken: true,
        },
      },
      {
        path: 'product',
        component: () => import('@/components/BackstageProduct/src/index.vue'),
        meta: {
          title: 'product',
          hidden: false,
          icon: 'HomeFilled',
          mustToken: true,
        },
      },
      {
        path: 'category',
        component: () => import('@/components/BackstageCategory/src/index.vue'),
        meta: {
          title: 'ategory',
          hidden: false,
          icon: 'HomeFilled',
          mustToken: true,
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
  {
    path: '/Backstage',
    component: () => import('@/views/backstage/index.vue'),
    meta: {
      title: '後台',
      hidden: false,
      icon: 'HomeFilled',
      mustToken: true,
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
          mustToken: true,
        },
      },
      {
        path: '/Backstage/users',
        component: () => import('@/components/BackstageUser/src/index.vue'),
        meta: {
          title: 'users',
          hidden: false,
          icon: 'HomeFilled',
          mustToken: true,
        },
      },
      {
        path: 'category',
        component: () => import('@/components/BackstageCategory/src/index.vue'),
        meta: {
          title: 'ategory',
          hidden: false,
          icon: 'HomeFilled',
          mustToken: true,
        },
      },
    ],
  },
]

export const menuRoutes = [
  {
    path: '/Backstage',
    component: () => import('@/views/backstage/index.vue'),
    meta: {
      title: '後台',
      hidden: false,
      icon: 'HomeFilled',
      mustToken: true,
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
          mustToken: true,
        },
      },
      {
        path: '/Backstage/users',
        component: () => import('@/components/BackstageUser/src/index.vue'),
        meta: {
          title: 'Users',
          hidden: false,
          icon: 'HomeFilled',
          mustToken: true,
        },
      },
      {
        path: 'product',
        component: () => import('@/components/BackstageProduct/src/index.vue'),
        meta: {
          title: 'product',
          hidden: false,
          icon: 'HomeFilled',
          mustToken: true,
        },
      },
      {
        path: 'category',
        component: () => import('@/components/BackstageCategory/src/index.vue'),
        meta: {
          title: 'ategory',
          hidden: false,
          icon: 'HomeFilled',
          mustToken: true,
        },
      },
    ],
  },
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
