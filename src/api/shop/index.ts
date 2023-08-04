
import request from '@/utils/request'
import type { CategoryResponseData, AttrResponseData, Attr, ShopList, Category, Shop, shopResponseData, ShopSearch } from './type'
enum API {
  C1_URL = '/admin/product/getCategory1',
  C2_URL = '/admin/product/getCategory2/',
  C3_URL = '/admin/product/getCategory3/',
  ATTR_URL = '/admin/product/attrInfoList/',
  ADDORUPDATEATTR_URL = '/admin/product/saveAttrInfo',
  DELETEATTR_URL = '/admin/product/deleteAttr/',
  SHOPS = '/api/shop',
  SHOP = '/api/shop/',
  CATEGORY = '/api/category/',
  CATEGORYS = '/api/category',
}

export const reqC1 = () => request.get<any, CategoryResponseData>(API.C1_URL)

export const reqC2 = (category1Id: number | string) =>
  request.get<any, CategoryResponseData>(API.C2_URL + category1Id)

export const reqC3 = (category2Id: number | string) =>
  request.get<any, CategoryResponseData>(API.C3_URL + category2Id)

export const reqAttr = (
  category1Id: number | string,
  category2Id: number | string,
  category3Id: number | string,
) =>
  request.get<any, AttrResponseData>(
    API.ATTR_URL + `${category1Id}/${category2Id}/${category3Id}`,
  )

// export const reqAddOrUpdateAttr = (data: Attr) =>
//   request.post<any, any>(API.ADDORUPDATEATTR_URL, data)

// export const reqRemoveAttr = (attrId: number) =>
//   request.delete<any, any>(API.DELETEATTR_URL + attrId)

export const getShop = () =>
  request.get<any, Shop>(API.SHOP + 1)

// export const getShopList = () =>
// request.get<any, ShopList>(API.SHOPS)

// export const getShopList = (data: ShopSearch) =>
// request.get<any, Shop[]>(API.SHOP + `/?city=${data.city!==undefined?data.city:null}&area=${data.area!==undefined?data.area:null}&categoryId=${data.categoryId}&other=${data.other}`)

// export const getShopList = (data: ShopSearch) =>
// request.get<any, Shop[]>(API.SHOP + `/?city=${data.city!==undefined?data.city:null}`)

export const getShopList = (data: ShopSearch) =>
  request.get<any, Shop[]>(API.SHOP + '/?' + 
  `${data.city !== undefined ? 'city=' + data.city : null}` + 
  `&${data.area !== undefined ? 'area=' + data.area : null}`+ 
  `&${data.categoryId !== undefined ? 'categoryId=' + data.categoryId : null}`+ 
  `&${data.other !== undefined ? 'other=' + data.other : null}`)
// export const getShopList = (data: string) =>
// request.get<any, ShopList>(API.SHOPS + `/?city=${data}`)

// export const getShopList = (data: string) =>
// request.get<any, Shop[]>(API.SHOPS + `/?city=${data}`)

