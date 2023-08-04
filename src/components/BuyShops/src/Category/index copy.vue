<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { onMounted, ref, watch } from 'vue'
import useCategoryStore from '@/store/modules/category'
import cityAreas from '@/utils/areaData.js'

let selectedOption1 = ref('')
let selectedOption2 = ref('')
const city: string[] = Object.keys(cityAreas)
const areas: string[][] = Object.values(cityAreas)
let area: string[]

let categoryStore = useCategoryStore()
console.log('area', Object.keys(cityAreas))
console.log('categoryStore', categoryStore)
onMounted(() => {
  getC1()
})

const getC1 = async () => {
  categoryStore.getC1()
}

watch(selectedOption1, (newValue) => {
  selectedOption2.value = ''
})

// console.log('categoryStore.c1Id', categoryStore.c1Id)
// const handler = (n: number) => {
//   if (n === 1) {
//     categoryStore.c2Id = ''
//     categoryStore.c3Id = ''
//     categoryStore.c3Arr = []
//     categoryStore.getC2()
//   } else if (n === 2) {
//     categoryStore.c3Id = ''
//     categoryStore.getC3()
//   }
// }

// const selectedValue: string = '區域鄉鎮';
// // const area: string[]

// const changeCity = () => {
//   console.log("selectedOption")
//   console.log(selectedOption)
//   selectedOption.value
//   const area= areas.南投縣
//   console.log("area")
//   console.log(area)
//   return area
// }

function changeCity(a: number) {
  console.log('selectedOption')
  console.log(selectedOption)
  //  area= areas.南投縣
  console.log('area')
  console.log(area)
  console.log('a')
  console.log(a)
  // console.log(select)
  // console.log(areas[select])
  // console.log(areas[selectedOption.value])
  console.log(areas[a])
  // area = areas[select]
}

watch(selectedOption1, (newValue: any) => {
  selectedOption2.value = ''
})
</script>
<template>
  <!--   <el-card>
      <el-form :inline="true">
   <el-form-item class="custom-form-item">
        <select
          class="custom-select-a"
          v-model="categoryStore.c1Id"
          @change="handler(1)"
          placeholder="縣市"
        >
          <option disabled selected value="">縣市</option>
          <option
            v-for="(c1, index) in areas"
            :key="index"
            :label="c1[0]"
            :value="c1[0]"
          ></option>
        </select>
      </el-form-item>

      <el-form-item>
        <el-dropdown class="el-dropdown border" @click="changeCity">
          <span class="el-dropdown-link">
            縣市
            <el-icon class="el-icon--right el-icon">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu v-for="area in areas">
              <el-dropdown-item>{{ area }}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-form-item>

      <el-form-item>
        <el-dropdown class="el-dropdown area border">
          <span class="el-dropdown-link">
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
            {{ a }}
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

  <div class="custom-form-item">
    <select v-model="selectedOption" class="custom-select-a">
      <option :value="selectedValue" disabled selected>縣市</option>
      <option v-for="(c1, index) in areas" :key="index" :value="c1[0]">
        {{ c1[0] }}
      </option>
    </select>
    <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon> 
  </div>  -->

  <el-form-item>
    <div class="custom-select-wrapper">
      <select class="custom-select" v-model="selectedOption1">
        <option disabled selected value="">請選擇縣市</option>
        <option v-for="(c1, index) in city" :key="index" :value="index">
          {{ c1 }}
        </option>
      </select>
      <div class="select-arrow">
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </div>
    </div>
  </el-form-item>

  <el-form-item>
    <div class="custom-select-wrapper">
      <select class="custom-select" v-model="selectedOption2">
        <option disabled selected value="">請選擇縣市</option>
        <option v-for="c1 in areas[selectedOption1]" :key="c1" :value="c1">
          {{ c1 }}
        </option>
      </select>
      <div class="select-arrow">
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </div>
    </div>
  </el-form-item>
</template>
<style lang="scss" scoped>
.custom-form-item {
}

// .custom-select {
//   position: relative;
//   display: inline-block;
//   width: 200px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   overflow: hidden;
// }

// /* 隐藏默认的下拉箭头 */
// .custom-select select {
//   appearance: none;
//   -webkit-appearance: none;
//   -moz-appearance: none;
//   background: transparent;
//   // padding: 8px 16px;
//   font-size: 16px;
//   width: 100%;
//   box-sizing: border-box;
// }

/* 自定义选中项的样式 */
// .custom-select select:focus {
//   outline: none;
//   border-color: #0078d4;
// }

// .custom-select {
//   display: flex;
//   align-items: center;
//   .el-icon--right {
//     left: -50px;
//   }
// }

.custom-form-item {
  border-radius: 100px; /* 添加圆弧效果 */
  //border: 1px solid #c2c2c2; /* 添加左右边框，可根据需要调整颜色和宽度 */
  padding: 10px; /* 可根据需要调整内边距 */
  .custom-select {
    position: relative;
    background: url('@/assets/icons/expand.png') no-repeat;
    // background: red;
    background-position: right center;
    background-size: 15px 15px; /* 调整图片的大小 */
    padding-right: 25px; /* 增加右侧内边距以避免图片与内容重叠 */
    color: #5e5e5e;
    margin: 0 10px;
  }
}

/* 自定义下拉箭头图标 */
.custom-select2::after {
  content: '\25BC';
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: #a5a5a5;
  // background-color: url();
  background: url('@/assets/images/expand.jpg') no-repeat;
}

.custom-select-a::-ms-expand {
  display: none;
}

/* 添加自定义样式 */
.custom-select-a {
  width: 150px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: rgba(255, 255, 255, 0.1) url('@/assets/icons/expand.png')
    no-repeat;
  background-position: right 20px center;
  background-size: 20px 20px; /* 调整图片的大小 */
  padding-right: 25px; /* 增加右侧内边距以避免图片与内容重叠 */
  border: 1px solid #ccc; /* 添加边框 */
  border-radius: 50px; /* 添加圆角 */
  padding: 8px 16px 8px; /* 调整内边距 */
  font-size: 14px; /* 调整字体大小 */
  color: #333; /* 设置字体颜色 */
  outline: none; /* 去除默认的选中边框 */
  cursor: pointer; /* 鼠标指针样式为手型 */
  background-color: transparent; /* 背景颜色设为透明，使得选中时背景颜色透过 */
}
.custom-select-a:hover {
  border: 1px solid $color;
}
/* 将placeholder文本设置为灰色 */
.custom-select-a option[disabled] {
  color: #999;
}

/* 自定义 el-select 的样式 */
// .custom-select {
//   border: none; /* 移除默认的边框 */
//   outline: none; /* 移除选中时的外边框 */
//   border-radius: 8px; /* 添加圆弧效果 */
//   padding: 5px; /* 可根据需要调整内边距 */
//   background: url('@/assets/images/expand.jpg') no-repeat;
// }

// .el-select {

.el-input {
  .el-input__wrapper {
    border-radius: 400px !important;
    background-color: aquamarine;
    color: aquamarine;
  }
}
// .card {
//   .form {
//     .item {
//       .select .el-input__wrapper {

//     border-radius: 1000px;
//     background-color: aquamarine;
//     color: aquamarine;
//   }
//       .select {
//         .select-trigger {
//           background-color: aquamarine;
//           border-radius: 100px;
//           color: aquamarine;
//           .el-input {
//             background-color: aquamarine;
//             border-radius: 100px;
//             color: aquamarine;
//             .el-input__wrapper {
//     border-radius: 1000px;
//     background-color: aquamarine;
//     color: aquamarine;
//   }
//           }
//         }
//         .option {
//         }
//       }
//     }
//   }
// }

el-card {
  .select {
    .el-input__wrapper {
      border-radius: 100px;
      background-color: aquamarine;
      color: aquamarine;
    }
  }
}

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
  // background-color: $color;
  background-color: red;
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

/////////////////////////////////////////////////////
///
///
///
///
///
///
///
///
///
///
/* 隐藏默认的下拉箭头 */
.custom-select-wrapper select::-ms-expand {
  display: none;
}

/* 添加自定义样式 */
.custom-select-wrapper {
  position: relative;
}

.custom-select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  border: 1px solid $border;
  border-radius: 50px;
  padding: 8px 16px;
  font-size: 14px;
  color: $font;
  outline: none;
  cursor: pointer;
  width: 150px; /* 设置宽度 */
  // background: url('@/assets/icons/expand.png') no-repeat;
}

.custom-select:hover {
  border: 1px solid $color;
}

/* 添加自定义下拉箭头样式 */
.select-arrow {
  display: flex;
  // position: absolute;
  // top: 50%;
  // right: 12px;
  // transform: translateY(-50%);
  // width: 0;
  // height: 0;
  // border-style: solid;
  // border-width: 5px 5px 0;
  // border-color: #333 transparent transparent;

  position: absolute;
  top: 50%;
  right: 20px;
  // left: 150px;
  transform: translateY(-50%);
  width: 16px; /* 设置图标宽度 */
  height: 16px; /* 设置图标高度 */
  background: url('path/to/down-arrow.png') no-repeat; /* 替换为您的图标路径 */
  /* 可添加其他样式，例如 background-size, background-position 等 */
  background: url('@/assets/icons/expand.png') no-repeat;
  z-index: -1;
}

.custom-select-icon {
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  width: 16px; /* 设置图标宽度 */
  height: 16px; /* 设置图标高度 */
  background: url('path/to/down-arrow.png') no-repeat; /* 替换为您的图标路径 */
  /* 可添加其他样式，例如 background-size, background-position 等 */
}

/* 将placeholder文本设置为灰色 */
.custom-select option[disabled] {
  color: #999;
}
</style>
