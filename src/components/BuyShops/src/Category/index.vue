<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-25 22:51:11
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-26 22:33:41
-->
<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'
import useCategoryStore from '@/store/modules/category'

let categoryStore = useCategoryStore()
console.log('categoryStore', categoryStore)
onMounted(() => {
  getC1()
})

const getC1 = async () => {
  categoryStore.getC1()
}

console.log('categoryStore.c1Id', categoryStore.c1Id)
const handler = (n: number) => {
  if (n === 1) {
    categoryStore.c2Id = ''
    categoryStore.c3Id = ''
    categoryStore.c3Arr = []
    categoryStore.getC2()
  } else if (n === 2) {
    categoryStore.c3Id = ''
    categoryStore.getC3()
  }
}
</script>
<template>
  <el-card>
    <el-form :inline="true">
      <el-form-item>
        <el-dropdown class="el-dropdown border">
          <span class="el-dropdown-link">
            縣市
            <el-icon class="el-icon--right el-icon">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item disabled>Action 4</el-dropdown-item>
              <el-dropdown-item divided>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-form-item>

      <el-form-item>
        <el-dropdown class="el-dropdown area border">
          <span class="el-dropdown-link">
            區域鄉鎮
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Acticcccccdddddddddddcccccn 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item disabled>Action 4</el-dropdown-item>
              <el-dropdown-item divided>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-form-item>

      <el-form-item>
        <el-dropdown class="el-dropdown area border">
          <span class="el-dropdown-link">
            其他
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Acticcccccdddddddddddcccccn 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item disabled>Action 4</el-dropdown-item>
              <el-dropdown-item divided>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-form-item>

      <el-form-item>
        <div class="mt-6 search-container border">
          <input class="search-input" type="text" placeholder="搜尋" />
          <el-button class="search-button" type="warning" :icon="Search" round>
            搜尋
          </el-button>
          <div class="search-history">
            <div class="search-history-item">歷史紀錄 1</div>
            <div class="search-history-item">歷史紀錄 2</div>
            <div class="search-history-item">歷史紀錄 3</div>
          </div>
        </div>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<style lang="scss" scoped>
.search-container {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
  outline: none;
}

.search-history {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
  padding: 8px;
  display: none;
}

.search-history-item {
  padding: 4px;
  cursor: pointer;
}

.el-select {
  width: 50px;
}
.el-dropdown {
  border-radius: 40px 40px;
  height: 40px;
  width: 150px;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  .el-dropdown-link {
    margin: 5px;
    font-size: 20px;
    cursor: pointer;
    // color: var(--el-color-primary);
    display: flex;
    align-items: center;
    .el-icon {
      margin: 0 0 0 20px;
    }
  }
}

.area {
  width: 200px;
}

.search-button {
  // width: 80px;
  color: white;
  background-color: $color;
}
.search-container {
  // border: rgb(250, 53, 53) 3px solid;
  height: 40px;

  border-radius: 40px 40px;
  // background-color: aqua;
  .search-input {
    border-radius: 30px 30px;
    border: none; /* 移除邊框 */
    outline: none; /* 移除聚焦時的輪廓線 */
    width: 300px;
    margin: 0 10px 0 30px;
    font-size: 18px;
  }
  .search-button {
    height: 40px;
  }
}
</style>
