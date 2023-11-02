
export interface ResponseData {
  code?: number
  message?: string
  ok?: boolean
}

export interface OrderResponseData extends ResponseData {
  data: boolean
}

export interface ReqAddOrder {
  takeTime: string
  addressId: number
  remark: string
}


