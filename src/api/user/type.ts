export interface LoginFormData {
  username?: string
  password?: string
  verifyCode?: string
}

export interface ResponseData {
  code?: number
  message?: string
  ok?: boolean
}

export interface LoginResponseData extends ResponseData {
  data?: LoginResponseData
}
export interface LoginResponseData {
  code?: number
  message?: string
  ok?: boolean
}
export interface UserInfoResponseData extends ResponseData {
  data: {
    routes: string[]
    buttons: string[]
    roles: string[]
    name: string
    account: string
    phone: string
    email: string
    favoriteShops: ShopList
    avatar: string
    cartCount: number
  }
}

export interface UserProfile {
  name: string
  account: string
  phone: string
  email: string
}

export interface UserPwd {
  password: string
  NewPassword: string
}

export interface UserProfileChangeResponse extends ResponseData {
  data: string
}

export interface ShopData {
  id: number
  name: string
  description: String
  address: String
  img: String
}

export type ShopList = ShopData[]

export interface LovesResponseData extends ResponseData {
  data: ShopList
}
