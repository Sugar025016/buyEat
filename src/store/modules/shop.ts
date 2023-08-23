import { getShopList } from '@/api/shop'
import { defineStore } from 'pinia'
import type { ShopsResponseData, ShopSearch } from '@/api/shop/type'
import { CategoryState } from './types/types'

const useShopStore = defineStore('Category', {
  state: (): CategoryState => {
    return {
      c1Id: '',
      c2Id: '',
      c3Id: '',
      c1Arr: [],
      c2Arr: [],
      c3Arr: [],
      c4Arr: [],
      c5Arr: {
        id: 0,
        name: '',
        description: '',
        address: '',
        img: '',
      },
    }
  },
  actions: {
    // async getShop() {
    //   let shop: Shop = await getShop()
    //   //   if (res.code === 200) {
    //   this.c5Arr = shop
    //
    //   //   }
    // },
    // async getShopList() {
    //   let response =await  getShopList()
    //
    //   let res: ShopList = await  getShopList()
    //
    //   //   if (res.code === 200) {
    //   this.c1Arr = res
    //
    //   //   }

    // },

    async getShopList(data: ShopSearch) {
      const res: ShopsResponseData = await getShopList(data)
      if (res.code === 200) {
        this.c1Arr = res.data
      } else {
        return Promise.reject(new Error(res.message))
      }
    },
  },
  getters: {},
})

export default useShopStore
