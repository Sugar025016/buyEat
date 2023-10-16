<script setup lang="ts">
import productsCard from './productsCard/index.vue'
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

onMounted(async() => {
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
  products.value = sellProductStore.products
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

  <el-card style="margin: 10px 0">
    <div class="products-body">
      <component v-for="product in products" :key="product.id">
        <!-- <div class="delete">
          <el-button
            type="danger"
            class="delete-button"
            :icon="Delete"
            circle
            @click.stop="deleteProduct"
          /> -->
        <productsCard
          :product="product"
          :setting="true"
          @click="updateProduct(product)"
        ></productsCard>
        <!-- </div> -->
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

  img {
    // width: 100%;
    // height: auto;
    // background-color: aqua;
  }
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
    // font-size: 30px;
    // margin: 10px;
    // border-bottom: #636262;
    // display: flex;
    // align-items: center;
    .content {
      margin: 25px 0;
      // background-color: aqua;
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
</style>
