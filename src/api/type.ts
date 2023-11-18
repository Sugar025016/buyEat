export interface Response {
  code?: number
  message?: string
  ok?: boolean
}

export interface ResultResponse extends Response {
  data: boolean
}

export interface Page {
  totalElements: number
  size: number
  number: number
  totalPages: number
}

// export interface PageResponse extends Response {
//   data: Page
// }

export interface Address {
  id?: number
  city: string
  area: string
  detail: string
}
