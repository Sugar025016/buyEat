<script setup lang="ts"></script>
<template>
  <el-card>
    <div class="box">
      <svg >
    <use xlink:href="#icon-phone" fill="red"></use>
</svg>
      <svg-icon name="phone" color="red" ></svg-icon>
      <svg-icon name="phone" color="red" ></svg-icon>
      <svg-icon name="phone" color="red" ></svg-icon>
      <div class="footer">
        <h3 class="title">-------------</h3>
        <p class="subtitle">Vue-Admin</p>
      </div>
    </div>
  </el-card>
  <div class="bottom">
    <def-svg-icon name="welcome" width="600px" height="300px"></def-svg-icon>
  </div>
</template>
<style lang="scss" scoped>
.box {
  display: flex;
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .footer {
    margin-left: 20px;
    margin-top: 15px;
    .title {
      font-size: 35px;
      margin-bottom: 30px;
      font-weight: 900;
      .gradient {
        background: linear-gradient(to right, #001529, #001529, #ffffff);
        /* 漸變方向是從左到右，顏色從紅色到綠色 */
        background-clip: text;
        -webkit-background-clip: text; /* 兼容WebKit瀏覽器（例如Chrome和Safari）*/
        color: transparent;
        font-size: 24px;
        font-weight: bold;
      }
    }
    .subtitle {
      font-style: italic;
      color: #ccc;
      font-weight: 700;
    }
  }
}
.bottom {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
</style>
