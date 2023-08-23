import request from '@/utils/request'
import type { UserResponseData, User } from './type'

enum API {
  ALLUSER_URL = '/backstage/user',
  ADDUSER_URL = '/backstage/user',
  UPDATEUSER_URL = '/backstage/user',
  ALLROLEURL = '/admin/acl/user/toAssign/',
  SETROLE_url = '/admin/acl/user/doAssignRole',
  DELETEUSER_URL = '/admin/acl/user/remove/',
  DELETEALLUSER_URL = '/admin/acl/user/batchRemove',
}

export const reqUserInfo = (page: number, limit: number, username: string) =>
  request.get<any, UserResponseData>(
    API.ALLUSER_URL + `?name=${username}&page=${page - 1}&size=${limit}`,
  )

export const reqAddOrUpdateUser = (data: User) => {
  if (data.id) {
    return request.put<any, any>(API.UPDATEUSER_URL, data)
  } else {
    return request.post<any, any>(API.ADDUSER_URL, data)
  }
}
