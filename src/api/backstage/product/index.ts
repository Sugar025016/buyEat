import request from '@/utils/request'
import type {
  ProductSearch,
  ProductData,
  ProductResponseData,
} from './type'
enum API {
  product = '/backstage/product',
}



export const getProduct = (data: number) => request.get<any, ProductData>(API.product+'/' + data)



export const reqProductInfo = (page: number, limit: number, data: number | undefined) => {
  let url = API.product + `?page=${page - 1}&size=${limit}`;
  if (data !== undefined) {
    url += `&shopId=${data}`;
  }
  return request.get<any, ProductResponseData>(url);
};
export const reqAddOrUpdateProduct = (data: ProductData) => {
  if (data.id) {
    return request.put<any, any>(API.product, data)
  } else {
    return request.post<any, any>(API.product, data)
  }
}