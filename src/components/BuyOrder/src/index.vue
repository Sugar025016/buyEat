<template>
  <div class="buyOrder">
    <h1>我的訂單</h1>

    <div class="tabs">
        <div class="tabs-header">
          <div
            v-for="(tab, index) in tabs"
            :key="index"
            @click="changeTab(index)"
          >
            <span
              class="tab-label underline"
              :class="{ active: activeTab === index }"
            >
              {{ tab.label }}
            </span>
            <!-- <span class="underline"></span> -->
          </div>
        </div>
        <div class="tabs-content">
            <table class="table">
            <thead>
              <tr>
                <th scope="col">店家</th>
                <th scope="col">訂單編號</th>
                <th scope="col">狀態</th>
                <th scope="col">取餐方式</th>
                <th scope="col">取餐時間</th>
                <th scope="col">金額</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
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
                <td>@mdo</td>
                <td>
                  <el-icon><DeleteFilled /></el-icon>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                <td>@mdo</td>
                <td>
                  <el-icon><DeleteFilled /></el-icon>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  </div>
</template>
<script setup lang="ts">

import { ref } from 'vue'
const activeTab = ref(0)
interface Tab {
  label: string
  content: string
}
const tabs: Tab[] = [
  { label: '我的訂單', content: 'Content 1' },
  { label: '過去的訂單', content: 'Content 2' },
]
const changeTab = (index: number) => {
  activeTab.value = index
}
</script>
<style lang="scss" scoped>
@import '@/styles/bootstrap.scss';

$table-cell-padding-y: 1.5rem; //
$table-border-color: rgb(155, 155, 155); //

@import 'node_modules/bootstrap/scss/_tables.scss';
.buyOrder {
    h1 {
      font-size: 36px;
    }
    .tabs {
      width: 100%;
      .tabs-header {
        display: flex;
        margin: 20px 0 0 0;
        color: #636262;
        border-bottom: 1px solid #63626236;
        white-space: nowrap;
        overflow-x: auto;
        div {
          position: relative;
          padding: 0 32px 0 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .tab-label {
          display: inline-block;
          position: relative;
          padding: 16px 0;
          z-index: 1;
        }

        .underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: transparent;
          transition: background-color 0.2s;
          display: inline-flex;
          position: relative;
          align-items: center;
          justify-content: center;
          border-bottom: 3px solid rgba(0, 0, 0, 0);
        }
        div:hover .underline {
          border-bottom: 3px solid $color;
        }
        .active {
          color: #000000;
          border-bottom: 3px solid $color;
        }
        div:hover {
          color: #000000;
        }
        .tabs-content {
          font-size: 30px;
          margin: 10px;
          border-bottom: #636262;
          display: flex;
          align-items: center;
        }
      }
    }
}
</style>
