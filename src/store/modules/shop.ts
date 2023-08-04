import { getShopList, getShop } from '@/api/shop'
import { defineStore } from 'pinia'
import type {
  Category,
  Shop,
  ShopList,
  ShopSearch,
  shopResponseData,
} from '@/api/shop/type'
import { CategoryState } from './types/types'
import { LoginResponseData } from '@/api/user/type'

let useShopStore = defineStore('Category', {
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
    async getShop() {
      let shop: Shop = await getShop()
      //   if (res.code === 200) {
      this.c5Arr = shop
      console.log('this.c5Arr', this.c5Arr)
      //   }
    },
    // async getShopList() {
    //   let response =await  getShopList()
    //   console.log("response", response)
    //   let res: ShopList = await  getShopList()
    //   console.log(getShopList())
    //   //   if (res.code === 200) {
    //   this.c1Arr = res
    //   console.log("this.c1Arr", this.c1Arr)
    //   //   }

    // },

    async getShopList(data: ShopSearch) {
      console.log('this.c1Arr', this.c1Arr)
      let res: ShopList = await getShopList(data)
      //   if (res.code === 200) {
      this.c1Arr = res
      console.log('this.c1Arr', this.c1Arr)
      //   }
    },

    // async getShopList() {
    //   let res: shopResponseData = await getShopList()
    //   console.log("res", res)
    //   // if (res.code === 200) {
    //     this.c1Arr = res.data
    //     console.log("this.c1Arr", this.c1Arr)
    //   // }

    // },
  },
  getters: {},
})

export default useShopStore
