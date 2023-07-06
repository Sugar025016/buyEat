import SvgIcon from './SvgIcon/index.vue'
import CHeader from './Header/index.vue'

const allGloablComponent: any = { SvgIcon,CHeader}
export default {
  install(app: any) {
    Object.keys(allGloablComponent).forEach((key) => {
      app.component(key, allGloablComponent[key])
    })
  },
}
