export interface ResponseData {
  code: number
  message: string
  ok: boolean
}

export interface ProductData {
  id: number | string
  name: string
  description: string
  img: String
}

export type ProductList = ProductData[]

export interface ProductsResponseData extends ResponseData {
  data: ProductList
}