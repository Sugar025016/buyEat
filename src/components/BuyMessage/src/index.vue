<template>
  <div class="buy-massage">
    <el-icon :size="30" class="buy-massage-icon"><Bell /></el-icon>
    <span class="buy-massage-span">連結Line Notify，最新消息不漏接，線上定參更方便！</span>

    <el-button class="buy-massage-button" type="warning" round>立即設定</el-button>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.buy-massage {
  background-color: rgba(253, 206, 136, 0.637);
  font-size: 20px;
  padding: 18px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .buy-massage-icon{
    margin: 0 10px;
  }
  .buy-massage-button{
    margin: 0px 10px;
    background-color: $color;
    font-size: 17px;

  }
}
</style>
