import type { RouteRecordRaw } from 'vue-router'
import type { CategoryObj } from '@/api/product/type'
import { Category, ShopList } from '@/api/shop/type'
import { Address } from '@/api/user/type'

export interface UserState {
  token: string | null
  menuRoutes: RouteRecordRaw[]
  asyncRoute: RouteRecordRaw[]
  username: string
  account: string
  email: string
  phone: string
  avatar: string
  buttons: string[]
  favoriteShop: ShopList
  cartCount: number
  address: Address
}

export interface CategoryState {
  c1Id: string | number
  c2Id: string | number
  c3Id: string | number
  c1Arr: Shop[]
  c2Arr: CategoryObj[]
  c3Arr: CategoryObj[]
  c4Arr: Category[]
  c5Arr: Shop
}
