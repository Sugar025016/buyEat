// 二次封裝axios
import axios from 'axios'
import { ElMessage } from 'element-plus'
import useUserStore from '@/store/modules/user'
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

request.interceptors.request.use(
  (config) => {
    let userStore = useUserStore()
    if (userStore.token) {
      config.headers.token = userStore.token
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

request.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      console.log("response.status:",response)
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response.data)
    }
  },
  (error) => {
    let message = ''
    const status = error.response.status
    switch (status) {
      // 401: 未登錄
      case 203:
        message = '服务异常'
        break // 403 token過期
      // 401: 未登錄
      case 401:
        message = '未登錄'
        break // 403 token過期
      case 403:
        message = '登錄過期，請重新登錄'
        break
      case 404:
        message = '網絡請求不存在'
        break
      case 500:
        message = '服務器出現問題'
        break
      default:
        message = error.response.data.message
        break
    }

    ElMessage({
      type: 'error',
      message,
    })
    alert(message) //錯誤彈窗，可以用ant模板代替
    return Promise.reject(error)
  },
)

export default request
