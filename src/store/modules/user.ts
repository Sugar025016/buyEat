import { defineStore } from 'pinia'
import router from '@/router'
import { reqLogin, reqUserInfo, reqLogOut, reqChangeUserInfo, reqChangeUserPwd, reqFavorites, reqChangeFavorite } from '@/api/user'
import type {
  LoginFormData,
  LoginResponseData,
  LovesResponseData,
  ProductData,
  UserProfile,
  UserProfileChangeResponse,
  UserPwd,
  UserInfoResponseData,
} from '@/api/user/type'
import type { UserState } from './types/types'
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
import { constantRoute, asyncRoute, anyRoute, menuRoutes } from '@/router/routes'

// @ts-ignore
import cloneDeep from 'lodash/cloneDeep'
import { number } from 'echarts'

function filterAsyncRoute(asyncRoute: any, routes: any) {
  return asyncRoute.filter((item: any) => {
    if (routes.includes(item.name)) {
      if (item.children && item.children.length > 0) {
        item.children = filterAsyncRoute(item.children, routes)
      }
      return true
    }
  })
}

let useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN()!,
      menuRoutes: menuRoutes,
      asyncRoute: [...constantRoute, ...asyncRoute, anyRoute],
      username: '',
      account: '',
      email: '',
      phone: '',
      favoriteShop: [],
      avatar: '',
      buttons: [],
      cartCount:0,
    }
  },
  // 异步|逻辑的地方
  actions: {
    //用户登录方法
    async userLogin(data: LoginFormData) {
      console.log("LoginFormData", data)

      let formData = new FormData();
      if (data.username !== undefined) {
        formData.append('username', data.username);
      }
      if (data.password !== undefined) {
        formData.append('password', data.password);
      }
      let res: LoginResponseData = await reqLogin(formData)
      // success=>token
      // error=>error.message
      if (res.data?.code === 200) {
        console.log("-----------token----------")

        console.log(GET_TOKEN())
        this.token = GET_TOKEN()
        console.log(this.token)


        return 'ok'
      } else {
        return Promise.reject(new Error(res.data as string))
      }
    },
    async userInfo() {
      let res: UserInfoResponseData = await reqUserInfo()
      if (res.code === 200) {

        console.log("UserInfoResponseData----------this.res.data",res.data)
        this.username = res.data.name
        this.account = res.data.account
        this.phone = res.data.phone
        this.email = res.data.email
        this.favoriteShop = res.data.favoriteShops
        this.cartCount=res.data.cartCount
        console.log("UserInfoResponseData----------this.cartCount",this.cartCount)

        let userAsyncRoute = filterAsyncRoute(
          cloneDeep(asyncRoute),
          this.token,
        )
        return 'ok';
      } else {
        return Promise.reject(new Error(res.message))
      }
      // this.menuRoutes = [...constantRoute, ...userAsyncRoute, anyRoute]
      // ;[...userAsyncRoute, anyRoute].forEach((route: any) => {
      //   router.addRoute(route)
      // })
      // } else {
      //   console.log('XXXXXXXXXXX')
      //   return Promise.reject(new Error(res.message))
      // }
    },

    async changeUserInfo(v: UserProfile) {
      let res: UserInfoResponseData = await reqChangeUserInfo(v)
      if (res.code === 200) {
        return await this.userInfo();
      } else {
        return Promise.reject(new Error(res.message))
      }
    },
    async changeUserPwd(v: UserPwd) {
      let res: UserProfileChangeResponse = await reqChangeUserPwd(v)
      if (res.code === 200) {
        return 'ok';
      } else {
        return Promise.reject(new Error(res.message))
      }
    },
    async getLove() {
      let res: LovesResponseData = await reqFavorites()
      if (res.code === 200) {
        this.favoriteShop=res.data;
        return res.data;
      } else {
        return Promise.reject(new Error(res.message))
      }
    },

    async changeFavoriteStore(id:number) {
      console.log(id)
      let res: LovesResponseData = await reqChangeFavorite(id)
      if (res.code === 200) {
         this.favoriteShop= await res.data;
        return this.favoriteShop;
      } else {
        return Promise.reject(new Error(res.message))
      }
    },
    async userLogout() {
      let res = await reqLogOut()
      if (res.code === 200) {
        this.userClear()
      } else {
        return Promise.reject(new Error(res.message))
      }
    },
    async userClear() {
        this.token = ''
        this.username = ''
        this.account = ''
        this.avatar = ''
        this.email= '',
        this.phone= '',
        this.favoriteShop= [],
        this.cartCount= 0,
        REMOVE_TOKEN()
    },
  },
  getters: {},
})

export default useUserStore
