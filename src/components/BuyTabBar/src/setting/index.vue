<template>
  <!-- <el-button circle size="small" :icon="Refresh" @click="updateRefsh" />
  <el-button circle size="small" :icon="FullScreen" @click="fullScreen" /> -->
  <!-- <el-popover placement="bottom" title="主题设置" :width="200" trigger="hover">
    <el-form>
      <el-form-item label="主题颜色">
        <el-color-picker
          v-model="color"
          show-alpha
          :predefine="predefineColors"
          size="small"
          @change="setColor"
        />
      </el-form-item>
      <el-form-item label="暗黑模式">
        <el-switch
          v-model="dark"
          size="small"
          inline-prompt
          active-icon="MoonNight"
          inactive-icon="Sunny"
          @change="changeDark"
        />
      </el-form-item>
    </el-form>
    <template #reference>
      <el-button circle size="small" :icon="Setting" />
    </template>

  </el-popover> -->

  <img :src="userStore.avatar" alt="" />
  <el-dropdown class="car">
    <span class="el-dropdown-link" style="cursor: pointer">
      {{ userStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="changeLink('profile', 1)">
          會員資料
        </el-dropdown-item>
        <el-dropdown-item @click="changeLink('changeProfile', 1)">
          修改會員資料
        </el-dropdown-item>
        <el-dropdown-item @click="changeLink('changeCompany', 1)">
          修改公司資料
        </el-dropdown-item>
        <el-dropdown-item @click="changeLink('changePassword', 1)">
          修改登入密碼
        </el-dropdown-item>
      </el-dropdown-menu>
      <el-dropdown-menu>
        <el-dropdown-item @click="changeLink('love', 2)">
          收藏店家
        </el-dropdown-item>
      </el-dropdown-menu>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout('logout')">登出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <div class="car">
    <!-- <a class="position-relative" href="#"> -->
    <router-link :to="'/BuyShopCar'" class="link">
      <ShoppingBag class="icon car" />
      <span class="cartQuantity text-white bg-warning conut">3</span>
    </router-link>
    <!-- </a> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Refresh,
  Setting,
  FullScreen,
  ArrowDown,
} from '@element-plus/icons-vue'
import useLayOutSettingStore from '@/store/modules/setting'
let layoutSettingStore = useLayOutSettingStore()
import useUserStore from '@/store/modules/user'
import { useRouter, useRoute } from 'vue-router'

let $router = useRouter()
let $route = useRoute()
let userStore = useUserStore()
let dark = ref<boolean>(false)

const goRoute = (path: string) => {
  $router.push(path)
}
console.log('＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃$window.location')
console.log(window.location.hash)
const path = window.location.hash
$router.getRoutes()

const updateRefsh = () => {
  layoutSettingStore.refsh = !layoutSettingStore.refsh
}

const fullScreen = () => {
  let full = document.fullscreenElement
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

const logout = async (path: string) => {
  $router.push(path)
}
const changeLink = async (path: string, number: number = 0) => {
  $router.push('/BuyMember/' + path + '/' + number)
}

const color = ref('rgba(255, 69, 0, 0.68)')
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
])

const changeDark = () => {
  let html = document.documentElement
  dark.value ? (html.className = 'dark') : (html.className = '')
}

const setColor = () => {
  let html = document.documentElement
  html.style.setProperty('--el-color-primary', color.value)
}
</script>

<style lang="scss" scoped>
img {
  width: 30px;
  height: 30px;
  border-radius: 20px;
  margin: 0 10px;
}

.car {
  margin: 0 30px 0 0;
  // background-color: aqua;
  .conut {
    border-radius: 50%;
    background: $color;
    background-color: $color;
    // background-color: brown;
  }
}

.position {
  &-relative {
    position: relative;
  }
  &-absolute {
    position: absolute;
  }
}
.cartQuantity {
  position: absolute;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 48px;
  top: 8px;
}
.bg-warning {
  background-color: $color;
}

.text-white {
  font-size: 18px;
  color: white;
}
</style>
