import request from '@/utils/request'
import type { OrderResponseData, ReqAddOrder } from './type'

enum API {
  ORDER_URL = '/api/order',
}
export const reqAddOrder = (data: ReqAddOrder) =>
  request.post<any, OrderResponseData>(API.ORDER_URL, data)
