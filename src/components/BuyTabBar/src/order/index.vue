<template>
  <div class="order">
    <div class="order-text">
      <!-- <a>訂單</a> -->

      <router-link :to="'/BuyOrder'" class="link">訂單</router-link>

    </div>
    <div class="order-text more">
      <span>更多</span>
      <el-dropdown class="car">
        <span class="el-dropdown-link" style="cursor: pointer">
          {{ userStore.username }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup lang="ts">
import useUserStore from '@/store/modules/user'

let userStore = useUserStore()

import { useRouter } from 'vue-router'
let $router = useRouter()
const goRoute =  (path:string) => {
  $router.push(path)
}
</script>

<style lang="scss" scoped>
.order {
  // width:500px;
  // display: inline-flex;
  // display: inline-block;
  display: flex;
  .order-text{
    margin:10px;
    font-size:15px;
    a {
      color: #000;
      text-decoration: none;
    }
  }
}
</style>
