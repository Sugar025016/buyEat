<template>
  <el-breadcrumb separator="/" :separator-icon="ArrowRight">
      <span class="title">便當報報</span>
  </el-breadcrumb>
</template>
<script setup lang="ts">
import { ArrowRight, Fold, Expand } from '@element-plus/icons-vue'
import useLayOutSettingStore from '@/store/modules/setting'
let LayOutSettingStore = useLayOutSettingStore()
const changeIcon = () => {
  LayOutSettingStore.isCollapse = !LayOutSettingStore.isCollapse
}
</script>

<style lang="scss" scoped>
.title {
  vertical-align: middle;
  font-size: 30px;
  color: $color;
  font-weight: 700;
}
</style>
