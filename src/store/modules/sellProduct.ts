import { reqAddOrUpdateSellProduct, reqDeleteSellProducts, reqGetSellProducts } from '@/api/sellProduct'
import { defineStore } from 'pinia'
import type { ResponseBoolean, ResponseProductList, SellProduct } from '@/api/sellProduct/type'
import { SellProductState, ShopState } from './types/types'
import ElMessage from 'element-plus/lib/components/message/index.js'


const useSellProductStore = defineStore('sellProductStore', {
	state: (): SellProductState => {
		return {
			products: [],
			shopId:0
		}
	},
	actions: {
		async setSellProductStoreShopId(shooId: number) {
			this.shopId=shooId
		},

		async getSellProduct() {
			let res: ResponseProductList = await reqGetSellProducts(this.shopId)
			console.log("res", res.data)
			if (res.code === 200) {
				this.products = res.data
			} else {
				ElMessage({
					type: 'error',
					message: '搜尋失败',
				})
			}
		},

		async deleteSellProduct(productId: number) {
			let res: ResponseBoolean = await reqDeleteSellProducts(productId)
			if (res.code === 200) {
				this.getSellProduct()
			} else {
				ElMessage({
					type: 'error',
					message: '搜尋失败',
				})
			}
		},

		async addOrUpdateSellProduct( sellProduct: SellProduct) {
			let res: ResponseBoolean = await reqAddOrUpdateSellProduct(this.shopId, sellProduct)
			if (res.code === 200) {
				this.getSellProduct()
			} else {
				ElMessage({
					type: 'error',
					message: '搜尋失败',
				})
			}
		}
	},
	getters: {
	},
})

export default useSellProductStore
