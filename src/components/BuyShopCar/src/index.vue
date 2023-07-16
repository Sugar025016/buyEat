<template>
  <div class="shopCart">
    <div class="shopCart-header">
      <h1>AAAAAAAAAAAAA</h1>
      <span>BBBBBBBBBB</span>
    </div>
    <div class="shopCart-body">
      <el-row class="shopCart-body" :gutter="20">
        <el-col :span="16">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">商品名稱</th>
                <th scope="col">部門/單位</th>
                <th scope="col">訂購人</th>
                <th scope="col">單價</th>
                <th scope="col">數量</th>
                <th scope="col">小計</th>
                <th scope="col">變更</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <el-input-number
                    v-model="num"
                    :min="1"
                    :max="10"
                    @change="handleChange"
                    size="small"
                  />
                </td>
                <td>@mdo</td>
                <td>
                  <el-icon><DeleteFilled /></el-icon>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>
                  <el-input-number
                    v-model="num"
                    :min="1"
                    :max="10"
                    @change="handleChange"
                    size="small"
                  />
                </td>
                <td>@mdo</td>
                <td>
                  <el-icon><DeleteFilled /></el-icon>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                <td>
                  <el-input-number
                    v-model="num"
                    :min="1"
                    :max="10"
                    @change="handleChange"
                    size="small"
                  />
                </td>
                <td>@mdo</td>
                <td>
                  <el-icon><DeleteFilled /></el-icon>
                </td>
              </tr>
            </tbody>
          </table>
        </el-col>
        <el-col :span="8">
          <div class="body-right">
            <span>總金額</span>
            <span>NT$350</span>
            <el-button type="warning" size="large" class="button-orange" round>
              確認訂單
            </el-button>
            <el-button type="warning" size="large" class="button-wight" round>
              繼續購物
            </el-button>
            <el-button type="warning" size="large" class="button-wight" round>
              糾團
            </el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const num = ref(1)
const handleChange = (value: number) => {
  console.log(value)
}
</script>
<style lang="scss" scoped>
// @import "../node_modules/bootstrap/scss/_modal.scss";

@import '@/styles/bootstrap.scss';

$table-cell-padding-y: 1.5rem; //
$table-cell-padding-x: 0.5rem;
$table-cell-padding-y-sm: 0.25rem;
$table-cell-padding-x-sm: 0.25rem;

$table-cell-vertical-align: top;

$table-color: var(--#{$prefix}body-color);
$table-bg: transparent;
$table-accent-bg: transparent;

$table-th-font-weight: null;

$table-striped-color: $table-color;
$table-striped-bg-factor: 0.05;
$table-striped-bg: rgba($black, $table-striped-bg-factor);

$table-active-color: $table-color;
$table-active-bg-factor: 0.1;
$table-active-bg: rgba($black, $table-active-bg-factor);

$table-hover-color: $table-color;
$table-hover-bg-factor: 0.075;
$table-hover-bg: rgba($black, $table-hover-bg-factor);

$table-border-factor: 0.1;
$table-border-width: $border-width;
$table-border-color: rgb(155, 155, 155); //

$table-striped-order: odd;
$table-striped-columns-order: even;

$table-group-separator-color: currentcolor;

$table-caption-color: $text-muted;

$table-bg-scale: -80%;

@import 'node_modules/bootstrap/scss/_tables.scss';

.shopCart {
  display: block;
  overflow: hidden;

  .shopCart-header {
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 40px;
      margin: 20px 0;
    }
    span {
      font-size: 18px;
      margin: 10px 0;
      padding: 10px 0;
    }
  }
  .shopCart-body {
    // display: flex;
    .table {
      tr {
      }
    }
    .body-left {
      //   vertical-align: baseline;
    }
    .body-right {
      // width: 400px;
      // width: a;
      margin: 10px;

      // background-color: aqua;
      display: flex;
      flex-direction: column;
      button {
        margin: 5px 0;
        background-color: $color;
        border: 0;
      }
      .button-wight {
        background-color: white;
        color: #000;
      }
      .button-orange:hover {
        background-color: rgb(253, 102, 20);
      }
      .button-wight:hover {
        background-color: rgba(253, 114, 1, 0.247);
        color: #000;
      }
    }
  }
}
</style>
