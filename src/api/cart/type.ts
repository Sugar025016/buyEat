export interface ResponseData {
  code: number
  message: string
  ok: boolean
}


export interface CartsData {
  shopId?: number
  shopName: string
  isOrderable: boolean
  cartResponses: CartList
}

export type CartList = CartData[]

export interface CartData {
  cartId: number
  department: string
  orderUsername: string
  qty: number
  note: string
  productResponse: ProductResponse
}

export interface ProductResponse {
  productId?: number
  productName: string
  price: number
  isOrderable: boolean
}


export interface CartResponseData extends ResponseData {
  data: CartsData
}


export interface CartRequest {
  cartId?: number
  productId: number
  department?: String
  orderUsername: string
  qty: number
  note: String
}


