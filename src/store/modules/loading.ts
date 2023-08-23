import { defineStore } from 'pinia'
// import { ElMessage, ElMessageBox } from 'element-plus'
// import ElMessageBox from "element-plus"
import { ElMessage, ElMessageBox } from 'element-plus'
import type { Action } from 'element-plus'

let useLoadingStore = defineStore('LoadingStore', {
  state: () => {
    return {
        isLoading: false,
    }
  },
  actions: {
    startLoading() {
        this.isLoading = true;
      },
      stopLoading() {
        this.isLoading = false;
      },
      open(message:string){
        ElMessageBox.alert(message, 'Title', {
          // if you want to disable its autofocus
          // autofocus: false,
          confirmButtonText: 'OK',
          callback: (action: Action) => {
            ElMessage({
              type: 'info',
              message: `action: ${action}`,
            })
          },
        })
      }
  }
})

export default useLoadingStore
