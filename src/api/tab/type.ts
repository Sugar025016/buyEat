export interface ResponseData {
  code: number
  message: string
  ok: boolean
}

export interface ProductData {
  id: number
  name: string
  description: string
  img: string
  prise: number
}

export type ProductList = ProductData[]

export interface TabData {
  id: number
  name: string
  products: ProductList
}

export type TabsData = TabData[]

export interface TabProductsResponseData extends ResponseData {
  data: TabsData
}

export interface ProductModalData {
  productId: number
  name: string
  description: string
  qty: number
  img: string
  prise: number
  department: string
  orderUsername: string
  note: string
}
