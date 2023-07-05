// 二次封裝axios
import axios from 'axios'
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

request.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
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
    alert(message) //錯誤彈窗，可以用ant模板代替
    return Promise.reject(error)
  },
)

export default request
