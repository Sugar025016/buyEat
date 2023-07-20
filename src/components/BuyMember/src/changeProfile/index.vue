<template>
  <div class="changeProfile">
    <div>
      <span>糖心蛋</span>
      <input type="text" class="rounded-input" placeholder="输入文本" />
    </div>

    <div>
      <span>糖心蛋</span>
      <input type="text" class="rounded-input" placeholder="输入文本" />
    </div>
    <div>
      <span>糖心蛋</span>
      <input type="text" class="rounded-input" placeholder="输入文本" />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.changeProfile {
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: $breakpoint-md) {
    grid-template-columns: repeat(2, 1fr);
  }
  div {
    display: flex;
    flex-direction: column;
    margin: 10px 10px 0 0;
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
