import router from '@/router'
import setting from './setting'
//@ts-expect-error-去錯誤訊息
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import pinia from './store'
import useUserStore from './store/modules/user'
nprogress.configure({ showSpinner: false })
let userStore = useUserStore(pinia)
// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  console.log('beforeEach:')
  document.title = to.meta.title + ` | ${setting.title}`
  document.title = `${setting.title}`
  nprogress.start()
  let token = userStore.token
  let username = userStore.username
  console.log('username:' + username)
  next()
  // if (token) {
  //   if (to.path === '/login') {
  //     next({ path: '/' })
  //   } else {
  //     console.log('username:' + username)
  //     if (username) {
  //       next()
  //     } else {
  //       try {
  //         console.log('await userStore.userInfo()')
  //         await userStore.userInfo()
  //         next({ ...to })
  //       } catch (error) {
  //         await userStore.userLogout()
  //         next({ path: '/login', query: { redirect: to.path } })
  //       }
  //     }
  //   }
  // } else {
  //   if (to.path == '/') {
  //     next()
  //   } else {
  //     next({ path: '/login', query: { redirect: to.path } })
  //   }
  // }
})
// 全局后置守卫

router.afterEach((route) => {
  nprogress.done()
})
