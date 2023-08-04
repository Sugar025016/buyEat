<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { onMounted, ref ,watch} from 'vue'
import useCategoryStore from '@/store/modules/category'
import cityAreas from '@/utils/areaData.js'


// const city: string[] = Object.keys(cityAreas)
// const areas: string[][] = Object.values(cityAreas)
const selectedOption1 = ref('');
const selectedOption2 = ref('');

const city = ['台北', '台中', '高雄']; // 假设 city 是第一个下拉选单的选项数据
const areas = {
  0: ['中山區', '大同區', '松山區'], // 假设这是台北市对应的區域数据
  1: ['西屯區', '南屯區', '北屯區'], // 假设这是台中市对应的區域数据
  2: ['前鎮區', '苓雅區', '三民區'], // 假设这是高雄市对应的區域数据
};

// 监听 selectedOption1 的变化，动态更新 selectedOption2 的值
watch(selectedOption1, (newValue) => {
  selectedOption2.value = '';
});


</script>
<template>
  <div>
    <select v-model="selectedOption1">
      <option disabled value="">請選擇縣市</option>
      <option v-for="(c1, index) in city" :key="index" :value="index">
        {{ c1 }}
      </option>
    </select>

    <select v-model="selectedOption2" >
      <option disabled value="">請選擇區域</option>
      <option v-for="area in areas[selectedOption1]" :key="area" :value="area">
        {{ area }}
      </option>
    </select>
  </div>
</template>
<style lang="scss" scoped>

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
