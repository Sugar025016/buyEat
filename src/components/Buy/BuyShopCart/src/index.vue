<template>
  <div class="shopCart">
    <div class="shopCart-header">
      <h1>購物車</h1>
    </div>
    <div class="shopCart-body">
      <el-row class="shopCart-body" :gutter="20">
        <el-col :span="16">
          <span>訂購店家:{{ carts.shopName }}，滿300可外送</span>
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
              <tr v-for="cart in carts.cartResponses">
                <th scope="row">{{ cart.productResponse.productName }}</th>
                <td>{{ cart.department }}</td>
                <td>{{ cart.orderUsername }}</td>
                <td>{{ cart.productResponse.price }}</td>
                <td>{{ cart.remark }}</td>
                <td>
                  <el-input-number
                    v-model="cart.qty"
                    :min="1"
                    :max="10"
                    @click="updateCart(cart.cartId, cart.qty)"
                    size="small"
                  />
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
            <span class="total">總金額:</span>
            <span class="total-data">NT${{ sum }}</span>
            <hr />
            <el-button
              type="warning"
              size="large"
              class="button-orange"
              @click="checkLink"
              round
            >
              確認訂單
            </el-button>
            <el-button
              type="warning"
              size="large"
              class="button-wight"
              @click="shopLink"
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
import { useRouter } from 'vue-router'
import { apiGetCart, apiDeleteCart, apiPutCart } from '@/api/cart'
import { CartList, CartResponseData, CartsData } from '@/api/cart/type'
import useUserStore from '@/store/modules/user'

let userStore = useUserStore()
let $router = useRouter()

const sum = ref(0)

const carts = ref<CartsData>({
  shopName: '',
  orderable: false,
  cartResponses: [],
  schedules: [],
})

const shopLink = () => {
  if (carts.value?.shopId) {
    $router.push('/BuyShop/' + carts.value.shopId)
  } else {
    $router.push('/')
  }
}

const checkLink = () => {
  $router.push('/BuyCheck')
}

const getCart = async () => {
  let res: CartResponseData = await apiGetCart()

  if (res.code === 200) {
    carts.value = res.data
    userStore.cartCount = getCartCount(res.data.cartResponses)
    sum.value = 0
    if (userStore.cartCount !== 0) {
      sum.value = carts.value.cartResponses.reduce(
        (total, v) => total + v.qty * v.productResponse.price,
        0,
      )
    }
  }
}

onMounted(() => {
  getCart()
})
const deleteCart = async (cartId: number) => {
  let res: CartResponseData = await apiDeleteCart(cartId)
  if (res.code === 200) {
    carts.value = res.data
    if (res.data.cartResponses) {
      userStore.cartCount = getCartCount(res.data.cartResponses)
    } else {
      userStore.cartCount = 0
    }
  }
}
const getCartCount = (cartResponses: CartList) => {
  if (cartResponses) {
    return cartResponses.length > 0
      ? cartResponses.reduce((total, cartData) => total + cartData.qty, 0)
      : 0
  } else {
    return 0
  }
}

const updateCart = async (cartId: number, qty: number) => {
  let res: CartResponseData = await apiPutCart(cartId, qty)
  if (res.code === 200) {
    carts.value = res.data
    userStore.cartCount = getCartCount(res.data.cartResponses)
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
      margin: 10px;

      display: flex;
      flex-direction: column;
      .total {
        font-size: 20px;
        margin: 0 0 5px 10px;
        color: #818181;
      }
      .total-data {
        font-size: 30px;
        margin: 0 0 0 10px;
      }
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
