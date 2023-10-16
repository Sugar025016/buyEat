<script setup lang="ts">
import {  reactive, ref } from 'vue'
import { PutTabData, TabData } from '@/api/tab/type'
import useUserStore from '@/store/modules/user'
import productsCard from '../productsCard/index.vue'
import useSellShopStore from '@/store/modules/sellShop'
import { ProductData } from '@/api/product/type'
import { reqAddOrUpdateTab } from '@/api/tab'

let sellShopStore = useSellShopStore()

let userStore = useUserStore()
const chooses = ref<ChooseProduct[]>([])

export interface ChooseProduct extends ProductData {
  isChoose: boolean
}

const tapProduct = ref<TabData>()

const inputUserName = ref('')
inputUserName.value = userStore.username
const count = ref(1)
count.value = 1

let tabParams = reactive<PutTabData>({
  id: 0,
  name: '',
  shopId: 0,
  shelve: false,
  productIds: [],
})

const setTab = () => {
  tabParams = reactive<PutTabData>({
    name: '',
    shopId: 0,
    shelve: false,
    productIds: [],
  })
  Object.assign(tabParams, tapProduct.value)
}

const getChooses = () => {
  chooses.value = []
  sellShopStore.shop.products.forEach((p) => {
    const selectedTab = tapProduct.value?.products.find((t) => t.id === p.id)
    const choose = reactive<ChooseProduct>({
      isChoose: false,
      id: 0,
      name: '',
      description: '',
      imgUrl: '',
      prise: 0,
      isOrderable: false,
    })
    Object.assign(choose, p)

    choose.isOrderable = p.isOrderable
    if (selectedTab) {
      choose.isChoose = true
    } else {
      choose.isChoose = false
    }
    chooses.value.push(choose)
  })
}

const save = async () => {
  tabParams.shopId = sellShopStore.shop.id
  tabParams.productIds = chooses.value
    .filter((v) => v.isChoose)
    .map((choose) => choose.id)
  let res = await reqAddOrUpdateTab(tabParams)
  if (res.code === 200 && res.data) {
    await sellShopStore.getSellShop(sellShopStore.shop.id)
    console.log("sellShopStore.shop",sellShopStore.shop)
  }
}


const getData = (t :TabData) => {
  tapProduct.value=t
  getChooses()
  setTab()
}

defineExpose({
  getData
})
</script>
<template>
  <div
    class="modal fade"
    id="tapStaticBackdrop"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <input
            type="text"
            class="rounded-input"
            placeholder="輸入分類名稱"
            v-model="tabParams.name"
          />
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <hr class="divider" />
        <div class="modal-body">
          <div
            class="products-card"
            v-for="product in chooses"
            :key="product.id"
          >
            <!-- <productsCard :product="product" :setting="true" v-model:choose="choose"></productsCard> -->
            <productsCard :product="product" :setting="true"></productsCard>
          </div>
        </div>
        <div class="modal-footer">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              v-model="tabParams.shelve"
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
              上架
            </label>
          </div>
          <div class="footer-button">
            <el-button
              type="warning"
              class="btn btn-primary"
              size="large"
              data-bs-dismiss="modal"
              round
              plain
            >
              取消
            </el-button>
            <el-button
              type="warning"
              class="btn btn-primary"
              size="large"
              @click="save()"
              data-bs-dismiss="modal"
              plain
              round
            >
              確認
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/bootstrap.scss';
@import 'node_modules/bootstrap/scss/_modal.scss';
@import 'node_modules/bootstrap/scss/_close.scss';
@import 'node_modules/bootstrap/scss/_forms.scss';
@import 'node_modules/bootstrap/scss/forms/_form-check.scss';

.divider {
  border-color: #ccc;
  margin: 0px;
}
.modal-dialog {
  .modal-content {
    border-radius: 20px;

    .btn-close {
      background-color: white;
      border-radius: 20px;
      position: absolute;
      top: 30px;
      right: 30px;
    }
    .modal-header {
      width: 100%;
      background-position: center;
      background-size: cover;
      margin: 20px 0;
      .rounded-input {
        padding: 0 20px;
        width: 100%;
        width: calc(100% - 50px);
        border: 1px solid #ccc;
        font-size: 20px;
        border-radius: 20px;
        // margin-bottom: 10px;
        background-color: #50505000;
        height: 40px;
      }
    }
    .modal-body {
      .products-card {
        margin: 10px 0;
      }
      .modal-description {
        font-size: 10px;
      }
      .divider {
        margin: 10px 0;
        border-color: #505050;
        height: 2px;
      }
      .modal-body-content {
        display: flex;
        flex-direction: column;
        margin: 10px 0 0 0;
        .rounded-input {
          padding: 0 10px;
          border: 1px solid #ccc;
          font-size: 20px;
          border-radius: 20px;
          margin-bottom: 10px;
          background-color: #50505000;
          height: 40px;
        }
        span {
          margin: 20px;
        }
      }
    }
    .modal-footer {
      display: flex;
      justify-content: space-between;
      .btn {
        border-radius: 20px;
        border: 0;
        font-size: 18px;
        color: $color;
      }

      .btn:hover {
        background-color: $color;
        color: white;
      }
      .count {
        .btn-count {
          margin: 0 20px;
        }
      }
      .form-check {
        display: flex;
        align-items: center;

        input {
          width: 50px;
          height: 25px;
          margin: 0 10px;
          // background-color: $color;
          border-color: $color;
          // border: red;
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
</style>
