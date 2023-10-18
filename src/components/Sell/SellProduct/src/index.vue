<script setup lang="ts">
import productsCard from '@/components/Sell/SellGlobalComponents/productsCard/index.vue'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import useSellProductStore from '@/store/modules/sellProduct'
import { SellProduct, SellProductList } from '@/api/sellProduct/type'
import SellProductDrawer from './SellProductDrawer/src/index.vue'

let $route = useRoute()

let sellProductStore = useSellProductStore()

const products = ref<SellProductList>([])

const keyword = ref('')
let regex = new RegExp('', 'i')
let shopId: number = parseInt($route.params.shopId as string)

onMounted(async () => {
  await setShopId()
  getProducts()
})

const setShopId = async () => {
  if (shopId) {
    await sellProductStore.setSellProductStoreShopId(shopId)
  }
}

const getProducts = async () => {
  if (shopId) {
    await sellProductStore.getSellProduct()
  }
  if(sellProductStore.products.length>0){

    products.value = sellProductStore.products
  }else{
    addProduct()
  }
}

watch(keyword, () => {
  regex = new RegExp(keyword.value, 'i')
})

const search = () => {
  if (keyword.value === '') {
    products.value = sellProductStore.products
  } else {
    products.value = sellProductStore.products.filter((v) => regex.test(v.name))
  }
}

const reset = () => {
  keyword.value = ''
  products.value = sellProductStore.products
}

const updateProduct = (product: SellProduct) => {
  SellProductDrawerRef.value?.updateProduct(product)
}

const addProduct = () => {
  SellProductDrawerRef.value?.addProduct()
}

const SellProductDrawerRef = ref<typeof SellProductDrawer>()
</script>

<template>
  <el-card style="height: 80px">
    <el-form :inline="true" class="form">
      <el-form-item label="餐點名稱:">
        <el-input
          placeholder="请你输入搜索餐點名稱"
          v-model="keyword"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="default" @click="search" round>
          搜索
        </el-button>
        <el-button size="default" @click="reset" round>重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  <!-- <el-tooltip content="Bottom center" effect="customized">
    <el-button>Customized theme</el-button>
  </el-tooltip> -->
  <el-card style="margin: 10px 0">
    <div class="products-body">
      <el-tooltip
        class="box-item"
        effect="dark"
        content="新增餐點"
        placement="bottom-end"
      >
        <productsCard :add="true" @click="addProduct()"></productsCard>
      </el-tooltip>

      <!-- <el-popover
    placement="bottom"
    title="新增餐點"
    trigger="hover"
  >
    <template #reference>
      <productsCard
          :add="true"
          @click="addProduct()"
        ></productsCard>

  </template>
  </el-popover> -->

      <component v-for="product in products" :key="product.id">
        <productsCard
          :change="true"
          :product="product"
          :setting="true"
          @click="updateProduct(product)"
        ></productsCard>
      </component>
    </div>
  </el-card>
  <SellProductDrawer ref="SellProductDrawerRef" />
</template>

<style lang="scss" scoped>
@import '@/styles/bootstrap.scss';
@import 'node_modules/bootstrap/scss/buttons';
@import 'node_modules/bootstrap/scss/_forms.scss';

.modal {
  background-color: rgba(0, 0, 0, 0.5);
}

.el-dialog {
  background-image: url('@/assets/images/product001.jpeg') !important; /* 設置背景圖片 */
  border-radius: 10px !important;
}

.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
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
      padding: 0 16px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .shop-button {
        color: $color;
        font-size: 17px;
        width: 100%;
        color: $color;
      }
      .shop-button:hover {
        background-color: $color;
        color: white;
      }
    }
    .tab-label {
      display: inline-block;
      position: relative;
      padding: 16px 0;
      z-index: 1;
      font-size: 20px;
      height: 50px;
      width: 100%;
    }

    .underline {
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: transparent;
      transition: background-color 0.2s;
      display: inline-flex;
      position: relative;
      align-items: center;
      justify-content: center;
      border-bottom: 3px solid rgba(255, 0, 0, 0);
    }
    .add {
      color: #000000;
    }
    div:hover .underline {
      border-bottom: 3px solid $color;
    }
    div:hover {
      color: #000000;
    }
  }
  .tabs-content {
    .content {
      margin: 25px 0;
      .tab-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        h3 {
          margin: 10px;
          cursor: pointer;
        }
        .tab-setting {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .form-check {
            display: flex;
            align-items: center;
            padding-left: 0px;
            input {
              width: 50px;
              height: 25px;
              margin: 0 10px;
              // background-color: $color;
              border-color: $color;
              user-select: none; /* 防止文字被滑鼠選取反白 */
              background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23ccc'/%3e%3c/svg%3e");
              caret-color: transparent;
            }
            input:checked {
              background-color: $color;
              border: red;
              background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
            }
            .form-check-label {
              font-size: 22px;
              color: $color;
            }
          }
        }
      }
    }
  }
}

.products-title {
  font-size: 30px;
  margin: 20px;
}

.products-body {
  display: grid; /* 使用CSS Grid布局 */
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  @media (min-width: $breakpoint-xs) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: $breakpoint-md) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: $breakpoint-xxl) {
    grid-template-columns: repeat(3, 1fr);
  }

  .delete {
    position: relative;
    // color: rgb(255, 0, 0);
    font-size: none;
    .delete-button {
      z-index: 10;
      position: absolute;
      margin: 5px 5px;
      right: 0px;
    }
  }
}

.el-popper.is-customized {
  /* Set padding to ensure the height is 32px */
  padding: 6px 12px;
  background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
}

.el-popper.is-customized .el-popper__arrow::before {
  background: linear-gradient(45deg, #b2e68d, #bce689);
  right: 0;
}
</style>
