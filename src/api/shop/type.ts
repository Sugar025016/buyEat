
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

export interface shopResponseData extends ResponseData {
  data: Shop[]
}
export interface AttrValue {
  id?: number
  valueName: string
  attrId?: number
  flag?: boolean
}

export type AttrValueList = AttrValue[]

export interface Attr {
  id?: number
  attrName: string
  categoryId: number | string
  categoryLevel: number
  attrValueList: AttrValueList
}

export type AttrList = Attr[]

export interface AttrResponseData extends ResponseData {
  data: Attr[]
}

export type ShopList = Shop[]

export interface Shop {
  id: number
  name: string
  description: String
  address: String
  img: String
}


export interface Category {
  id?: number
  name: string
}

export interface ShopSearch {
  city?: string
  area?: string
  categoryId?:number
  other?:string
}
