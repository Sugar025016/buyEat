import { defineStore } from 'pinia'
import {
  reqLogin,
  reqUserInfo,
  reqLogOut,
  reqChangeUserInfo,
  reqChangeUserPwd,
  reqFavorites,
  reqChangeFavorite,
} from '@/api/user'
import type {
  LoginFormData,
  LoginResponseData,
  LovesResponseData,
  UserProfile,
  UserProfileChangeResponse,
  UserPwd,
  UserInfoResponseData,
  Address,
  ChangeLovesResponseData,
} from '@/api/user/type'
import type { UserState } from './types/types'
import { GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
import {
  constantRoute,
  asyncRoute,
  anyRoute,
  menuRoutes,
  menuSellRoutes,
  sellShop,
} from '@/router/routes'

// @ts-expect-error
import cloneDeep from 'lodash/cloneDeep'
import { useRouter } from 'vue-router'
import { ShopData } from '@/api/shop/type'

let $router = useRouter()

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

const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN()!,
      menuRoutes: menuRoutes,
      menuSellRoutes: sellShop,
      asyncRoute: [...constantRoute, ...asyncRoute, anyRoute],
      username: '',
      account: '',
      email: '',
      phone: '',
      favoriteShop: [],
      avatar: '',
      buttons: [],
      cartCount: 0,
      addresses: {
        id: 0,
        city: '',
        area: '',
        detail: '',
      },
    }
  },
  // 异步|逻辑的地方
  actions: {
    //用户登录方法
    async userLogin(data: LoginFormData) {
      const formData = new FormData()
      if (data.username !== undefined) {
        formData.append('username', data.username)
      }
      if (data.password !== undefined) {
        formData.append('password', data.password)
      }
      const res: LoginResponseData = await reqLogin(formData)
      // console.log("*********",res)
      // success=>token
      // error=>error.message
      if (res.code === 200) {
        // console.log("*********",res)
        this.token = GET_TOKEN()
        await this.userInfo()
        return 'ok'
      } else {
        return Promise.reject(new Error(res.data as string))
      }
    },
    async userInfo() {
      const res: UserInfoResponseData = await reqUserInfo()
      if (res.code === 200) {
        this.username = res.data.name
        this.account = res.data.account
        this.phone = res.data.phone
        this.email = res.data.email
        this.favoriteShop = res.data.favoriteShops
        this.cartCount = res.data.cartCount
        this.address = res.data.address as Address

        // const userAsyncRoute = filterAsyncRoute(
        //   cloneDeep(asyncRoute),
        //   this.token,
        // )

        return 'ok'
      } else {
        return Promise.reject(new Error(res.message))
      }
      // this.menuRoutes = [...constantRoute, ...userAsyncRoute, anyRoute]
      // ;[...userAsyncRoute, anyRoute].forEach((route: any) => {
      //   router.addRoute(route)
      // })
      // } else {
      //
      //   return Promise.reject(new Error(res.message))
      // }
    },

    async changeUserInfo(v: UserProfile) {
      const res: UserInfoResponseData = await reqChangeUserInfo(v)
      if (res.code === 200) {
        return await this.userInfo()
      } else {
        return Promise.reject(new Error(res.message))
      }
    },
    async changeUserPwd(v: UserPwd) {
      const res: UserProfileChangeResponse = await reqChangeUserPwd(v)
      if (res.code === 200) {
        return 'ok'
      } else {
        return Promise.reject(new Error(res.message))
      }
    },
    async getLove() {
      const res: LovesResponseData = await reqFavorites()
      if (res.code === 200) {
        this.favoriteShop = res.data
        return res.data
      } else {
        return Promise.reject(new Error(res.message))
      }
    },
    async changeFavoriteStore(id: number) {
      const res: ChangeLovesResponseData = await reqChangeFavorite(id)

      if (res.code === 200 && res.data) {
        await this.getLove()
        return this.favoriteShop
      } else {
        return Promise.reject(new Error(res.message))
      }
    },
    async isLove(id: number) {
      const isFavorite = this.favoriteShop.some(
        (value: ShopData) => value.id === id,
      )
      if (isFavorite) {
        return '#fd7e14'
      } else {
        return 'rgb(139, 139, 139)'
      }
    },

    async userLogout() {
      const res = await reqLogOut()
      if (res.code === 200) {
        this.userClear()
        return res
      } else {
        return Promise.reject(new Error(res.message))
      }
    },
    async userClear() {
      this.token = ''
      this.username = ''
      this.account = ''
      this.avatar = ''
      ;(this.email = ''),
        (this.phone = ''),
        (this.favoriteShop = []),
        (this.cartCount = 0),
        REMOVE_TOKEN()
    },
    async getUserAddress() {
      const res: UserInfoResponseData = await reqChangeUserInfo(v)
      if (res.code === 200) {
        return await this.userInfo()
      } else {
        return Promise.reject(new Error(res.message))
      }
    },
  },
  getters: {},
})

export default useUserStore
