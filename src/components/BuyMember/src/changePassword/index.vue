<template>
  <div class="changeProfile">
    <div>
      <span>新密碼</span>
      <input type="text" class="rounded-input" placeholder="输入文本" />
    </div>
    <div>
      <span>再次輸入新密碼</span>
      <input type="text" class="rounded-input" placeholder="输入文本" />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.changeProfile {
  margin: 20px auto;
  max-width: 400px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  div {
    display: flex;
    flex-direction: column;
    margin: 10px 0 0 0;

    .rounded-input {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 20px;
      margin-bottom: 10px;
    }
    span {
      margin: 5px;
    }
  }
}
</style>
