<template>
  <!-- <div>{{ product }}</div> -->
  <div
    class="productCard"
    @click="
      setting === true
        ? (product.isChoose = !product.isChoose)
        : (product.isChoose = product.isChoose)
    "
    :class="{ active: setting }"
  >
    <!-- <el-icon><Close /></el-icon> -->
    <el-button
      type="primary"
      class="delete"
      :icon="Delete"
      circle
      @click.stop="deleteProduct(product.productId)"
    />
    <span class="orderable" v-if="!product.orderable">未上架</span>

    <div class="overlay" v-if="!product.orderable"></div>

    <input
      class="form-check-input checkbox"
      type="checkbox"
      id="inlineCheckbox1"
      v-model="product.isChoose"
      v-if="choose"
    />
    <div class="products-content">
      <span class="content-title">
        {{ product.name }}
      </span>
      <span class="content-description">
        {{ product.description }}
      </span>
      <span class="content-price">{{ product.prise }}$</span>
    </div>
    <img :src="product.imgUrl" v-if="product.imgUrl" alt="AA" />
  </div>
</template>
<script setup lang="ts">
import { markRaw, onMounted, ref } from 'vue'

defineProps(['product', 'setting', 'choose'])
import { Close, Delete } from '@element-plus/icons-vue'
import setting from '@/setting'
// import { ElMessageBox } from 'element-plus/es/components/index.js';
import { ElMessageBox } from 'element-plus'
import ElMessage from 'element-plus/lib/components/message/index.js'
import useSellShopStore from '@/store/modules/sellShop'
import useSellProductStore from '@/store/modules/sellProduct'
import { async } from 'rxjs';
import {  useRoute } from 'vue-router'
let sellProductStore = useSellProductStore()
const option1 = ref(false)
let $route = useRoute()
// $route.params.
const deleteProduct = (productId:number) => {
  ElMessageBox.confirm('是否確認要刪除?', 'Warning', {
    confirmButtonText: '刪除',
    cancelButtonText: '取消',
    type: 'warning',
    icon: markRaw(Delete),
  })
    .then(() => {
      console.log('這-------')
      sellProductStore.deleteSellProduct( productId)
      ElMessage({
        type: 'success',
        message: 'Delete completed',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}
</script>
<style lang="scss" scoped>
.productCard.active .overlay {
  display: block; /* 当 active 为 true 时显示遮罩层 */
}
.productCard .overlay {
  display: block; /* 当 active 为 true 时显示遮罩层 */
}
.active:hover {
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transform: scale(1.01);
}
.active:active {
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.2);
  // box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
  transform: scale(1);
}
.productCard {
  position: relative;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  border: 1px solid #8f8f8f54;
  height: 150px;
  width: 100%;
  justify-content: space-between;

  border-radius: 10px;
  // $form-check-input-checked-color: $color;
  .overlay {
    position: absolute;
    // border: 1px solid #8f8f8f54;
    // top: 1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    background-color: rgba(212, 212, 212, 0.7); /* 遮罩层的颜色和透明度 */
    border-radius: 10px;
    // display: none; /* 初始时隐藏遮罩层 */
  }
  .checkbox {
    // --custom-checkbox-check-color: #ff0000;
    height: 18px;
    width: 18px;
    position: absolute;
    background-color: $color;
    margin: 0;
  }
  .delete {
    // color: rgb(255, 0, 0);
    // font-size: 10px;
    z-index: 10;
    position: absolute;
    margin: 5px 5px;
    right: 0px;
  }
  .orderable {
    color: rgb(255, 0, 0);
    font-size: 10px;
    z-index: 1;
    position: absolute;
    margin: 5px 25px;
  }
  .checkbox:checked::before {
    /* 使用 content 属性来创建勾选标志 */
    content: '\2713'; /* 这是 Unicode 编码的勾选符号 */
    font-size: 30px; /* 勾选标志的大小 */
    color: #fff; /* 勾选标志的颜色 */
    position: absolute; /* 使勾选标志居中 */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 18px; /* 勾选标志的宽度 */
    height: 18px; /* 勾选标志的高度 */
    line-height: 14px; /* 行高与高度相同，使文本垂直居中 */
    background-color: $color;
    vertical-align: middle;
    border: 1px solid #f80505;
  }

  .products-content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 20px 10px;
    width: 100%;
    justify-content: space-between;
    align-content: space-between;

    span {
      max-width: 100%;
      font-size: 20px;
      color: rgba(0, 0, 0, 0.801);
    }

    .content-description {
      color: rgba(134, 134, 134, 0.801);
      font-size: 15px;
    }
  }
  img {
    border-radius: 0 10px 10px 0;

    height: 150px;
    width: 150px;
  }
}
</style>
