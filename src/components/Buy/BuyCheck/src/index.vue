<template>
  <div class="shopCart">
    <div class="shopCart-header">
      <h1>訂單資料確認</h1>
    </div>
    <div class="shopCart-body">
      <el-row class="shopCart-body" :gutter="20">
        <el-col :span="16">
          <div>
            <span>外送時間：</span>
            <el-select
              v-model="selectedDate"
              placeholder="请选择日期"
              size="large"
            >
              <el-option
                v-for="date in dateOptions"
                :key="date"
                :label="date.year + ' - ' + date.month + ' - ' + date.date"
                :value="date"
              />
            </el-select>

            <el-select
              v-model="selectedTime"
              placeholder="Select a time"
              size="large"
            >
              <el-option
                v-for="time in availableTimes"
                :key="time"
                :label="time"
                :value="time"
              ></el-option>
            </el-select>
          </div>

          <hr />
          <div class="address">
            <span>外送地址：</span>
            <span v-if="userStore.address">
              {{
                userStore.address.city +
                userStore.address.area +
                userStore.address.detail
              }}
            </span>
            <el-button
              type="warning"
              size="large"
              class="button-wight"
              v-if="!userStore.address"
              round
            >
              新增
            </el-button>
            <el-button
              type="warning"
              size="large"
              class="button-wight"
              v-else
              round
            >
              變更
            </el-button>
          </div>
          <hr />
          <div class="textarea">
            <span>備註：</span>
            <div>
              <el-input
                v-model="textarea"
                :rows="7"
                type="textarea"
                placeholder="Please input"
                maxlength="100"
              />
            </div>
            <!-- <el-button
              type="warning"
              size="large"
              class="button-wight"
              round
            ></el-button> -->
          </div>
        </el-col>
        <el-col :span="8">
          <div class="body-right">
            <span class="total">總金額:</span>
            <span class="total-data">NT${{ sum }}</span>
            <hr />
            <el-button type="warning" size="large" class="button-orange" round>
              送出訂單
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
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { apiGetCart } from '@/api/cart'
import { CartResponseData, CartsData } from '@/api/cart/type'
import { MyDate, Time } from './type'
import useUserStore from '@/store/modules/user'
import { time } from 'echarts'

let userStore = useUserStore()
let $router = useRouter()

const sum = ref(0)

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
const dateOptions = ref<MyDate[]>([])

const date = ref(0)
const selectedDate = ref('')
const textarea = ref('')

// 计算日期选项
const today = new Date('2017-07-09')
const oneWeekLater = new Date(today)
oneWeekLater.setDate(today.getDate() + 70)

const selectedTime = ref<string | null>(null)

const availableTimes = computed((startHours: number) => {
  const times = []
  const startTime1 = new Date()
  startTime1.setHours(10, 0, 0, 0)
  const endTime1 = new Date()
  endTime1.setHours(14, 0, 0, 0)

  const interval = 15 * 60 * 1000 // 15分

  let currentTime1 = startTime1.getTime()
  while (currentTime1 <= endTime1.getTime()) {
    const time = new Date(currentTime1)
    times.push(formatTime(time))
    currentTime1 += interval
  }

  return times
})

// 辅助函数，将时间格式化为HH:mm字符串
function formatTime(time) {
  const hours = time.getHours().toString().padStart(2, '0')
  const minutes = time.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
}

const timeData: Time = {
  hours: 0,
  minutes: 0,
}
while (today <= oneWeekLater) {
  const dateData: MyDate = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate(),
  }

  dateOptions.value.push(dateData)
  today.setDate(today.getDate() + 1)
  console.log(today.getTime())
  console.log(today.getTimezoneOffset())
  console.log(today.getDay())
}

const disabledDate = (date: any) => {
  // const today = new Date()

  // // 获取一周后的日期
  // const oneWeekLater = new Date(today)
  // oneWeekLater.setDate(today.getDate() + 7)

  // // 如果日期在当前日期和一周后之间，则可选，否则不可选
  // return (
  //   date.getTime() < today.getTime()-1 || date.getTime() > oneWeekLater.getTime()
  // )

  const today = new Date() // 获取当前日期
  const oneWeekLater = new Date(today)
  oneWeekLater.setDate(today.getDate() + 7) // 获取一星期后的日期

  // 如果日期小于当前日期或大于一星期后的日期，则不可选
  return (
    date.getTime() < today.getTime() || date.getTime() > oneWeekLater.getTime()
  )
}

const getCart = async () => {
  let res: CartResponseData = await apiGetCart()

  if (res.code === 200) {
    carts.value = res.data
    userStore.cartCount = res.data.cartResponses.reduce(
      (total, cartData) => total + cartData.qty,
      0,
    )

    sum.value = carts.value.cartResponses.reduce(
      (total, v) => total + v.qty * v.productResponse.price,
      0,
    )
  }
}

onMounted(() => {
  getCart()
})
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
    .textarea {
      display: flex;
      // justify-content: space-between;
      align-items: center;
      div {
        width: 500px;
      }
    }
    .address {
      display: flex;
      justify-content: space-between;
      align-items: center;
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
