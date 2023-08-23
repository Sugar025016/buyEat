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
  console.log('userStore:' + userStore.username)
  console.log('o.meta.mustToken:' + to.path)
  console.log('beforeEach:')
  document.title = to.meta.title + ` | ${setting.title}`
  document.title = `${setting.title}`
  nprogress.start()
  let token = userStore.token
  let username = userStore.username
  console.log('username:' + username)
  console.log('token:' + token)
  if(token&& !username){
    try {
      console.log('7777777777777777777')
      console.log('to', to)
      // next({ path: '/BuyShops' })
      await userStore.userInfo()
      console.log('777777777-------------')
      next({ ...to })
    } catch (error) {

      console.log('路由報錯清空userStore')
      await userStore.userClear()
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
  if (to.meta.mustToken) {
    console.log(to.path)
    console.log('11111111111111111111')
    if (token) {
      console.log('22222222222222')
      if (to.path === '/login') {
        console.log('33333333333333333333')
        console.log(to.path)
        console.log('33333333333333333333')
        next({ path: '/' })
      } else {
        console.log('4444444444444444444')
        console.log('username:' + username)
          next()
      }
    } else {
      if (to.path == '/login') {
        console.log('55555555555555')
        next()
      } else {
        next({ path: '/login', query: { redirect: to.path } })
      }
    }
  } else if (to.path === '/login' && token ) {

    next({ path: '/' })
  } else {

    console.log('10101010101010101010')
    console.log(to)
    next()
  }



})
// 全局后置守卫

router.afterEach((route) => {
  nprogress.done()
})
