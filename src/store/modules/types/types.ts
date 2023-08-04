import type { RouteRecordRaw } from 'vue-router'
import type { CategoryObj } from '@/api/product/attr/type'
import { Category, Shop, ShopList } from '@/api/shop/type'
export interface UserState {
  token: string | null
  menuRoutes: RouteRecordRaw[]
  asyncRoute: RouteRecordRaw[]
  username: string
  avatar: string
  buttons: string[]
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
