import request from '@/utils/request'
import type { TabProductsResponseData } from './type'
enum API {
  TAB = '/api/tab/',
}

export const getTabProducts = (data: number) =>
  request.get<any, TabProductsResponseData>(API.TAB + data)
