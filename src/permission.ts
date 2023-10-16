import router from '@/router'
import setting from './setting'
//@ts-expect-error-去錯誤訊息
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import pinia from './store'
import useUserStore from './store/modules/user'
nprogress.configure({ showSpinner: false })
const userStore = useUserStore(pinia)
// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title + ` | ${setting.title}`
  document.title = `${setting.title}`
  nprogress.start()
  const token = userStore.token
  const username = userStore.username

  if (token && !userStore.username) {
    try {
      await userStore.userInfo()

      next({ ...to })
    } catch (error) {
      await userStore.userClear()
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
  if (to.meta.mustToken) {
    if (token) {
      if (to.path === '/login') {
        next({ path: '/' })
      } else {
        next()
      }
    } else {
      if (to.path == '/login') {
        next()
      } else {
        next({ path: '/login', query: { redirect: to.path } })
      }
    }
  } else if (to.path === '/login' && token) {
    next({ path: '/' })
  } else {
    next()
  }
})
// 全局后置守卫

router.afterEach((route) => {
  nprogress.done()
})
