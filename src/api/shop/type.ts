export interface ResponseData {
  code: number
  message: string
  ok: boolean
}

export interface CategoryObj {
  id: number | string
  name: string
  category1Id?: number
  category2Id?: number
}

export interface CategoryResponseData extends ResponseData {
  data: CategoryObj[]
}

export type ShopList = ShopData[]

export interface ShopData {
  id: number
  name: string
  description: string
  address: string
  img: string
}

export interface ShopsResponseData extends ResponseData {
  data: ShopList
}

export interface ShopResponseData extends ResponseData {
  data: ShopData
}

export interface Category {
  id?: number
  name: string
}

export interface ShopSearch {
  city?: string
  area?: string
  categoryId?: number
  other?: string
}
