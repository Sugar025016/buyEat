import request from '@/utils/request'
import type {
  ShopsResponseData,
  ShopSearch,
  ShopResponseData,
} from './type'
enum API {
  SHOPS = '/api/shop',
  SHOPS_RECOMMEND = '/api/shop/recommend',
  SHOP = '/api/shop/',
}



export const getShop = (data: number) => request.get<any, ShopResponseData>(API.SHOP + data)



export const getShopList = (data: ShopSearch) =>
  request.get<any, ShopsResponseData>(
    API.SHOPS +
    '?' +
    `${data.city !== undefined ? 'city=' + data.city : null}` +
    `&${data.area !== undefined ? 'area=' + data.area : null}` +
    `&${data.categoryId !== undefined ? 'categoryId=' + data.categoryId : null}` +
    `&${data.other !== undefined ? 'other=' + data.other : null}`,
  )



  export const getRecommendShops = (data: ShopSearch) =>
  request.get<any, ShopsResponseData>(
    API.SHOPS_RECOMMEND 
  )

