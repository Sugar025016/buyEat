<template>
  <div class="">
    <div class="shop">
      <el-row :gutter="0" class="shop-card">
        <el-col :span="8" class="shop-img">
          <div class="shop-border"></div>
        </el-col>
        <el-col :span="16" class="shop-content">
          <!-- <el-row :gutter="0" class="shop-content-row"> -->

          <div class="shop-title">
            <span>AAAAAAAAAAAa</span>
            <img
              src="@/assets/icons/heart.png"
              class="rounded-full"
              loading="lazy"
            />
          </div>
          <div class="shop-remark">
            <span>
              BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
            </span>
          </div>
          <div class="shop-information">
            <div class="information">
              <el-icon :size="20"><Location /></el-icon>
              <span>BBBBBBBBBBBBBBBBBBBBBBBBBBBBB</span>
            </div>
            <div class="information">
              <el-icon :size="20"><Watch /></el-icon>
              <span>BBBBBBBBBBBBBBBBBBBBBBBBBB</span>
            </div>
          </div>
          <div class="shop-buttons">
            <el-button
              size="large"
              type="warning"
              class="shop-button"
              :icon="House"
              round
              plain
            >
              Primary
            </el-button>
            <el-button
              size="large"
              type="warning"
              class="shop-button"
              :icon="User"
              round
              plain
            >
              Primary
            </el-button>
            <el-button
              size="large"
              type="warning"
              class="shop-button"
              :icon="ChatRound"
              round
              plain
            >
              Primary
            </el-button>
            <el-button
              size="large"
              type="warning"
              class="shop-button"
              :icon="Watch"
              round
              plain
              color=""
            >
              Primary
            </el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup lang="ts">
import { House, ChatRound, User, Watch } from '@element-plus/icons-vue'
</script>
<style lang="scss" scoped>
$b-color: $color;
.shop {
  .shop-card {
    display: flex;
    align-items: center;
    justify-content: center;
    .shop-img {
      margin: 0px;
      padding: 0px;
      flex: 1;
      display: flex;
      width: 100%;
      height: 380px;
      background: url('@/assets/images/food.jpg') no-repeat;
      background-size: cover;
      border-radius: 20px;
      padding: 5px 5px 5px 5px;
      .shop-border {
        height: 100%;
        width: 100%;
        border-radius: 20px;
        border: white 1px solid;
        overflow: hidden;
        display: flex;
      }
    }
    .shop-content {

  box-shadow: 0px 4px 3px 2px rgba(0, 0, 0, 0.1);
      background-color: rgb(255, 255, 254);
      // .shop-content-row {
      // margin: 30px;
      padding: 30px;
      // height:calc(440px - 60px) ;
      height: 340px;
      .shop-title {
        display: flex;
        width: 100%;
        margin: 0 0 5px 0;

        justify-content: space-between;
        img {
          width: 50px;
          height: 50px;
          border-radius: 20px;
          margin: 0 10px;
        }
        span {
          font-size: 50px;
        }
      }
      .shop-remark {
        span {
          display: block;
          word-wrap: break-word;
          word-break: break-all;
          max-width: 100%;
          color: rgba(134, 134, 134, 0.801);
          font-size: 20px;
        }
      }
      .shop-information {
        margin: 40px 0;
        .information {
          margin: 10px 0;
          display: flex;
          align-items: center;
          span {
            margin-left: 5px;
            display: block;
            word-wrap: break-word;
            word-break: break-all;
            max-width: 100%;
            color: rgba(0, 0, 0, 0.801);
            font-size: 20px;
          }
          el-icon {
            width: 20px;
            height: 0px;
          }
        }
      }
      .shop-buttons {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .shop-button {
          color: $color;
          font-size: 17px;
          width: 100%;
        }
        .shop-button:hover {
          background-color: $color;
          color: white;
        }
      }
    }
  }
}
</style>
