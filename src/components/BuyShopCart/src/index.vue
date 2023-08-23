<template>
  <div class="shopCart">
    <div class="shopCart-header">
      <h1>購物車</h1>
      <span>訂購店家:{{ carts.shopName }}，滿300可外送</span>
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
                <th scope="col">備註</th>
                <th scope="col">數量</th>
                <th scope="col">小計</th>
                <th scope="col">變更</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cart, index) in carts.cartResponses">
                <th scope="row">{{ cart.productResponse.productName }}</th>
                <td>{{ cart.department }}</td>
                <td>{{ cart.orderUsername }}</td>
                <td>{{ cart.productResponse.price }}</td>
                <td>{{ cart.note }}</td>
                <td>
                  <el-input-number
                    v-model="cart.qty"
                    :min="1"
                    :max="10"
                    @change="handleChange(cart.qty)"
                    @click="updateCart(cart.cartId, cart.qty)"
                    size="small"
                  />
                  <!-- <el-input-number
                    v-model="cart.qty"
                    :min="1"
                    :max="10"
                    @change="updateCart(cart.cartId,cart.qty )"
                    size="small"
                  /> -->
                </td>
                <td>{{ cart.productResponse.price * cart.qty }}</td>
                <td>
                  <el-icon @click="deleteCart(cart.cartId)">
                    <DeleteFilled />
                  </el-icon>
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
            <el-button
              type="warning"
              size="large"
              class="button-wight"
              @click="link"
              round
            >
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
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { apiGetCart, apiDeleteCart, apiPutCart } from '@/api/cart'
import { CartResponseData, CartsData } from '@/api/cart/type'
import useUserStore from '@/store/modules/user'

let userStore = useUserStore()
let $router = useRouter()
const route = useRoute()

const num = ref(1)
const handleChange = (value: number) => {
  console.log(value)
}

const carts = ref<CartsData>({
  shopName: '',
  isOrderable: false,
  cartResponses: [],
})

const link = () => {
  if (carts.value?.shopId) {
    $router.push('/BuyShop/' + carts.value.shopId)
  } else {
    $router.push('/')
  }
}

// const shopId = ref<number>()
const getCart = async () => {
  let res: CartResponseData = await apiGetCart()
  console.log('getHasProduct*******', res)
  if (res.code === 200) {
    carts.value = res.data
    userStore.cartCount = res.data.cartResponses.reduce(
      (total, cartData) => total + cartData.qty,
      0,
    )
  }
}

onMounted(() => {
  console.log('onMounted*******')
  getCart()
  console.log('onMounted*******')
})
const deleteCart = async (cartId: number) => {
  let res: CartResponseData = await apiDeleteCart(cartId)
  if (res.code === 200) {
    carts.value = res.data
    if (res.data.cartResponses) {
      userStore.cartCount = res.data.cartResponses.reduce(
        (total, cartData) => total + cartData.qty,
        0,
      )
    } else {
      userStore.cartCount = 0
    }
  }
}

const updateCart = async (cartId: number, qty: number) => {
  let res: CartResponseData = await apiPutCart(cartId, qty)
  if (res.code === 200) {
    carts.value = res.data
    userStore.cartCount = res.data.cartResponses.reduce(
      (total, cartData) => total + cartData.qty,
      0,
    )
  }
}
</script>
<style lang="scss" scoped>
// @import "../node_modules/bootstrap/scss/_modal.scss";

@import '@/styles/bootstrap.scss';
$table-cell-padding-y: 1.5rem; //
$table-border-color: rgb(155, 155, 155); //
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
        .el-icon {
          cursor: pointer; /* 添加手型光标效果 */
        }
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
