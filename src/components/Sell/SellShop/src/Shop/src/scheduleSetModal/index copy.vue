<script setup lang="ts">
import { Schedule, Schedules } from '@/api/shop/type'
import { Watch, Phone } from '@element-plus/icons-vue'
import { number } from 'echarts'
import { ref, defineProps, defineExpose, computed, nextTick } from 'vue'
import { Plus, Delete } from '@element-plus/icons-vue'
const checkList = ref(['selected and disabled', 'Option A'])

// defineProps(['schedules', 'phone', 'name','scheduleSetModal'])

// const startTime = ref('')
// const endTime = ref('')
const closeModal = (modalId: string) => {
  const modal = document.getElementById(modalId)
  if (modal) {
    modal.classList.remove('show')
    modal.style.display = 'none'
  }
}

// const $emit = defineEmits(['update:scheduleVisible'])

// const openModal = (modalId: string) => {
//   const modal = document.getElementById(modalId)
//   if (modal) {
//     modal.classList.add('show')
//     modal.style.display = 'block'
//   }
// }

// const value = ref('')
// const checkList = ref(['星期 一', '星期 二', '星期 三', '星期 四'])

const props = defineProps({
  scheduleSetModal: Boolean,
  title: String,
  message: String,
  onClose: Function,
})
const visible = ref(props.scheduleSetModal)

const $emit = defineEmits(['update:scheduleSetModal'])

// 定义关闭对话框的方法
const handleClose = () => {
  $emit('update:scheduleSetModal', (visible.value = false))
}

// 定义确认和取消按钮的方法
const confirm = async () => {
  await formRef.value.validate()
  times.value.forEach((v) => {
    v
  })
  // 执行确认操作
  // 可以根据需要触发事件或执行其他逻辑
  handleClose()
}

const cancel = () => {
  // 执行取消操作
  // 可以根据需要触发事件或执行其他逻辑
  handleClose()
}

// const startTime = ref('')
// const endTime = ref('')

const schedules = ref<Schedules>([])

export interface Week {
  week: number
  weekName: String
}

export interface Time {
  startTime: String
  endTime: String
}
const weekLists = ref<Week[]>([
  { week: 0, weekName: '星期日' },
  { week: 1, weekName: '星期一' },
  { week: 2, weekName: '星期二' },
  { week: 3, weekName: '星期三' },
  { week: 4, weekName: '星期四' },
  { week: 5, weekName: '星期五' },
  { week: 6, weekName: '星期六' },
])

const checkAll = ref(true)
const isIndeterminate = ref(false)

export interface ScheduleParams {
  weeks: number[]
  times: [{ startTime: string; endTime: string }]
}
// const scheduleParams = ref<ScheduleParams>({
//   weeks: [],
//   times: [{ startTime: '', endTime: '' }],
// })
const scheduleParams = ref<ScheduleParams>({
  weeks: [],
  times: [{ startTime: '', endTime: '' }],
})
const checkedCities = ref<number[]>([])
const times = ref<Time[]>([{ startTime: '', endTime: '' }])

const handleCheckAllChange = (val: boolean) => {
  console.log('val', val)
  scheduleParams.value.weeks = val
    ? weekLists.value.map((item) => item.week)
    : []
  isIndeterminate.value = false
  console.log('checkedCities', scheduleParams.value.weeks)
}
const handleCheckedCitiesChange = (value: number[]) => {
  console.log('checkedCities--star', scheduleParams.value.weeks)
  const checkedCount = value.length
  checkAll.value = checkedCount === weekLists.value.length
  isIndeterminate.value =
    checkedCount > 0 && checkedCount < weekLists.value.length
  console.log('checkedCities--end', scheduleParams.value.weeks)
}

const handleWeekChange = (value: number[]) => {
  scheduleParams.value.weeks = value
  handleCheckedCitiesChange(scheduleParams.value.weeks)
  nextTick(() => {
    formRef.value.clearValidate('times')
  })
}

defineExpose({
  handleWeekChange,
})

// onMounted(() => {
//   handleCheckAllChange(true)
// })

// const startTime = ref<string | null>(null)
// const endTime = ref<string | null>(null)

// const availableTimes = computed(() => {
//   const times = []
//   const startTime1 = new Date()
//   startTime1.setHours(0, 10, 0, 0)
//   const endTime1 = new Date()
//   endTime1.setHours(23, 60, 0, 0)
//   const startTime2 = new Date()
//   startTime2.setHours(0, 10, 0, 0)
//   const endTime2 = new Date()
//   endTime2.setHours(23, 60, 0, 0)

//   const interval = 10 * 60 * 1000 // 10分钟的毫秒数

//   // 生成10:00到14:00之间的时间
//   let currentTime1 = startTime1.getTime()
//   while (currentTime1 <= endTime1.getTime()) {
//     const time = new Date(currentTime1)
//     times.push(formatTime(time))
//     currentTime1 += interval
//   }

//   // 生成16:00到19:00之间的时间
//   let currentTime2 = startTime2.getTime()
//   while (currentTime2 <= endTime2.getTime()) {
//     const time = new Date(currentTime2)
//     times.push(formatTime(time))
//     currentTime2 += interval
//   }

//   return times
// })

// 辅助函数，将时间格式化为HH:mm字符串
// function formatTime(time: any) {
//   const hours = time.getHours().toString().padStart(2, '0')
//   const minutes = time.getMinutes().toString().padStart(2, '0')
//   return `${hours}:${minutes}`
// }

function addTime() {
  scheduleParams.value.times.push({ startTime: '', endTime: '' })
  // const times = ref<Time[]>([{ startTime: '', endTime: '' }])
}

function deleteTime(i: number) {
  scheduleParams.value.times.splice(i, 1)
  // const times = ref<Time[]>([{ startTime: '', endTime: '' }])
}

const radio = ref(2)

let formRef = ref<any>()

// let rules =
//   radio.value === 1
//     ? {
//         weeks: [{ required: true, message: '請選澤星期', trigger: 'change' }],
//       }
//     : {
//         weeks: [
//           { required: true, message: 'weeks不能為空', trigger: 'change' },
//         ],
//         times: [
//           { required: true, message: 'times不能為空', trigger: 'change' },
//         ],
//       }

let rules1 = {
  weeks: [{ required: true, message: '請選澤星期', trigger: 'change' }],
}

let rules2 = {
  weeks: [{ required: true, message: 'weeks不能為空', trigger: 'change' }],
  times: [{ required: true, message: 'times不能為空', trigger: 'change' }],
  'times.startTime': [{ required: true, message: '請輸入startTime', trigger: 'change' }],

  'times.endTime': [{ required: true, message: '請輸入endTime', trigger: 'change' }],
}

const radioChange = () => {
  nextTick(() => {
    formRef.value.clearValidate('times')
    formRef.value.clearValidate('times.startTime')
    formRef.value.clearValidate('times.endTime')
  })

}
</script>

<template>
  <div class="dialog">
    <el-dialog
      v-model="props.scheduleSetModal"
      title="設定營業時間"
      :before-close="handleClose"
      class="test1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <el-form
              :model="scheduleParams"
              :rules="radio === 2 ? rules2 : rules1"
              ref="formRef"
            >
              <el-checkbox
                v-model="checkAll"
                :indeterminate="isIndeterminate"
                @change="handleCheckAllChange"
              >
                每天
              </el-checkbox>

              <el-form-item prop="weeks">
                <el-checkbox-group
                  v-model="scheduleParams.weeks"
                  @change="handleCheckedCitiesChange"
                >
                  <el-checkbox
                    v-for="week in weekLists"
                    :key="week.week"
                    :label="week.week"
                  >
                    {{ week.weekName }}
                  </el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-radio-group v-model="radio" @change="radioChange">
                <el-radio :label="3">非營業日</el-radio>
                <el-radio :label="1">24小時營業</el-radio>
                <el-radio :label="2">選擇營業時間</el-radio>
              </el-radio-group>

              <el-form-item prop="times">
                <!-- 
              <div class="chooseTime-overlay">
              <div class="overlay"></div> -->
                <div class="chooseTime" :class="{ allowed: radio !== 2 }">
                  <!-- <div
                class="set-time demo-time-range" :class="{ radio !== 2? 'demo-time-range':'set-time' }"
                v-for="(time, index) in times"
              > -->
                  <div
                    class="set-time demo-time-range"
                    :class="{ allowed: radio !== 2 }"
                    v-for="(time, index) in scheduleParams.times"
                  >
                    <!-- <el-time-select
                v-model="time.startTime"
                class="mr-3"
                placeholder="Start time"
                start="00:00"
                step="00:10"
                end="23:59"
                format="hh:mm A"
              /> -->

                    <!-- //////////////////////////////////////////////////////////-->
                    <!-- <div>
                  <el-select
                    v-model="time.startTime"
                    placeholder="Select a time"
                    :disabled="radio !== 2"
                  >
                    <el-option
                      v-for="time in availableTimes"
                      :key="time"
                      :label="time"
                      :value="time"
                    ></el-option>
                  </el-select>
                </div>

                <span>～</span>
                <div>
                  <el-select
                    v-model="time.endTime"
                    placeholder="Select a time"
                    :disabled="radio !== 2"
                  >
                    <el-option
                      v-for="time in availableTimes"
                      :key="time"
                      :label="time"
                      :value="time"
                    ></el-option>
                  </el-select>
                </div> -->
                    <!-- //////////////////////////////////////////////////////////-->
                    <!-- <el-time-picker
                  v-model="startTime"
                  is-range
                  range-separator="To"
                  start-placeholder="Start time"
                  end-placeholder="End time"
                  :disabled="radio !== 2"
                  format="HH:mm"
                /> -->

                    <!-- <def-svg-icon
                  class="buy-svg-icon"
                  name="delete"
                  width="28px"
                  height="30px"
                ></def-svg-icon> -->

                <el-form-item prop="times.startTime">
                    <el-time-select
                      v-model="time.startTime"
                      :max-time="
                        time.endTime === '00:00' ? '23:59' : time.endTime
                      "
                      class="mr-4"
                      placeholder="Start time"
                      start="00:00"
                      step="00:10"
                      end="23:50"
                      :disabled="radio !== 2"
                      :clearable="false"
                    />
                    </el-form-item>
                    <span>～</span>

                <el-form-item prop="times.endTime">
                    <el-time-select
                      v-model="time.endTime"
                      :min-time="time.startTime"
                      placeholder="End time"
                      start="00:10"
                      step="00:10"
                      end="24:00"
                      :disabled="radio !== 2"
                      :clearable="false"
                    />

                  </el-form-item>
                    <el-button
                      class="button-icon"
                      type="primary"
                      :icon="Delete"
                      circle
                      plain
                      @click="deleteTime(index)"
                      :disabled="radio !== 2"
                    />
                  </div>

                  <!-- <span @click="addTime">
                <def-svg-icon
                  class="buy-svg-icon"
                  name="add1"
                  width="30px"
                  height="30px"
                ></def-svg-icon>
              </span>
              <e-button @click="addTime">
                <def-svg-icon
                  class="buy-svg-icon"
                  name="add1"
                  width="30px"
                  height="30px"
                ></def-svg-icon>
              </e-button> -->

                  <el-button
                    class="button-icon"
                    type="primary"
                    :icon="Plus"
                    circle
                    plain
                    @click="addTime"
                    v-if="times.length < 3"
                    :disabled="radio !== 2"
                  />
                </div>
              </el-form-item>
            </el-form>
            <!-- </div> -->
          </div>
          <!-- <div class="modal-footer">
            <el-button
              class="btn btn-primary"
              @click="cancel()"
              type="primary"
              round
              plain
            >
              取消
            </el-button>

            <el-button
              class="btn btn-primary"
              @click="confirm()"
              type="primary"
              round
              plain
            >
              設定
            </el-button>
          </div> -->
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <!-- <div class="modal-footer"> -->
          <el-button
            class="btn btn-primary"
            @click="cancel()"
            type="primary"
            round
            plain
          >
            取消
          </el-button>

          <el-button
            class="btn btn-primary"
            @click="confirm()"
            type="primary"
            round
            plain
          >
            設定
          </el-button>
          <!-- </div> -->
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/bootstrap.scss';
@import 'node_modules/bootstrap/scss/_modal.scss';
@import 'node_modules/bootstrap/scss/close';
@import 'node_modules/bootstrap/scss/forms';
.el-dialog__headerbtn {
}

.modal-dialog {
  margin-bottom: 0px;
  .modal-content {
    .modal-body {
      .is-checked {
        ::v-deep .el-checkbox__inner {
          background-color: $color;
          border-color: red;
        }

        // ::v-deep .el-checkbox__inner,
        // .el-checkbox__original:hover {
        //   background-color: $color;
        //   border-color: red;
        // }

        // ::v-deep .el-checkbox__original:hover {
        //   background-color: $color;
        //   border-color: red;
        // }

        ::v-deep .el-checkbox__original {
          background-color: $color;
          border-color: red;
        }
        ::v-deep .el-checkbox__label {
          // background-color: blueviolet ;
          color: $color;
        }
      }
      .el-checkbox {
        // background-color: rgb(255, 127, 249);

        ::v-deep .el-checkbox__inner:hover {
          border-color: $color;
        }
        ::v-deep .is-indeterminate {
          .el-checkbox__inner {
            background-color: $color;
            border-color: red;
          }

          // ::v-deep .el-checkbox__inner::before {
          //   content: '';
          //   position: absolute;
          //   display: block;
          //   // background-color: var(--el-checkbox-checked-icon-color);
          //   background-color: rgb(58, 241, 174);
          //   height: 2px;
          //   transform: scale(0.5);
          //   left: 0;
          //   right: 0;
          //   top: 5px;
          // }
          ::v-deep .el-checkbox__label {
            background-color: rgb(101, 226, 43);
            color: $color;
          }
          ::v-deep .el-checkbox {
            display: flex;
            width: 100%;
            margin: 5px;
            align-items: center;
            justify-content: center;

            ::v-deep .el-checkbox__label {
              color: $color-skin;
            }
          }
        }
      }

      .el-checkbox-group {
        margin-right: none;
        display: grid;
        grid-template-columns: repeat(5, 1fr);

        // ::v-deep .el-checkbox {
        //   display: flex;
        //   width: 100%;
        //   margin: 5px;
        //   align-items: center;
        //   justify-content: center;

        //   ::v-deep .el-checkbox__label {
        //     color: $color-skin;
        //   }
        // }
      }

      .el-radio-group {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        // margin-right:none;
        // margin: 10px;
        .el-radio {
          width: 100%;
          display: flex;
          align-items: center;
          margin-right: none;
          margin: 5px 0;
        }

        ::v-deep .is-checked {
          .el-radio__input {
            .el-radio__inner {
              background-color: $color;
              border-color: red;
            }
          }
          .el-radio__label {
            color: $color;
          }
        }
      }

      // .chooseTime-overlay {
      //   position: relative;
      // pointer-events: none;
      // opacity: 0.5;
      // cursor: not-allowed;
      //       .overlay {
      //         position: absolute;
      // pointer-events: none;
      //         z-index: 1;
      //         width: calc(100% + 2px);
      //         height: calc(100% + 2px);
      //         background-color: rgba(212, 212, 212, 0.7); /* 遮罩层的颜色和透明度 */
      //         height: auto;
      //         height: 100%;
      //       }

      .chooseTime {
        border: 1px;
        border-color: red;
        border: 1px solid $color;
        padding: 5px 0px 0px 10px;
        // height: 100%;

        .set-time {
          display: grid;
          // grid-template-columns: repeat(4, 6fr 1fr 6fr 1fr);
          grid-template-columns: 3fr auto 3fr auto;
          grid-column-gap: 5px;
          align-items: center;
          justify-content: center;
          padding: 0 5px;

          ::v-deep .el-select {
            // border-radius: 30px;
            // background-color: aquamarine;

            .select-trigger {
              margin: 0px;
              border-radius: 30px;
              // border:none;
              // box-shadow:none;

              .el-input {
                border-radius: 30px;
                ::v-deep .is-focus {
                  border-color: $color;
                }
                .el-input__wrapper {
                  border: none;
                  box-shadow: none;
                  border: 1px solid $color;
                  // box-shadow: 0 0 0 1px $color-skin;
                }

                // .el-input__wrapper:hover {
                //   border: none;
                //   box-shadow: none;

                //   // border: 1px solid $color;
                //   // box-shadow:1px $color;
                //   box-shadow: 0 0 0 1px $color-skin;
                // }

                .el-input__wrapper:active {
                  border: none;
                  box-shadow: none;

                  // border: 1px solid $color;
                  // box-shadow:5px $color;
                }
              }
            }
          }
        }
        span {
          margin: 10px;
        }
        .buy-svg-icon {
          margin: 10px;
        }
        .button-icon {
          margin: 10px;
          ::v-deep .el-icon {
          }
        }
      }
      .allowed {
        // z-index: 1000;
        opacity: 0.5;
        cursor: not-allowed;
      }

      .allowed {
        // z-index: 1000;
        opacity: 0.5;
        cursor: not-allowed;
        .el-input__wrapper:hover {
          // border: none;
          // box-shadow: none;

          // // border: 1px solid $color;
          // // box-shadow:1px $color;
          box-shadow: 0 0 0 0px $color-skin;
        }
      }
      // }
    }
    .modal-footer {
      display: flex;
      font-size: 22px;
      justify-content: space-around;
      align-items: center;
      color: $color;
      margin: 0 0 30px 0;
      span {
        margin: 0 20px;
      }
      span:hover {
        color: white;
        cursor: pointer;
      }

      span:active {
        color: $color;
        cursor: pointer;
      }

      .btn-primary:active {
        ::v-deep span:active {
          color: rgb(255, 255, 255);
        }
      }
    }
  }
}
.el-dialog__footer {
  .dialog-footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .el-button {
      margin-right: 20px;
      ::v-deep span {
        font-size: 16px;
        margin: 10px;
      }
    }
  }
}
// ::v-deep .el-checkbox__input.is-indeterminate .el-checkbox__inner::before {
//   content: '';
//   background-color: $color;
//   position: absolute;
//   display: block;
//   height: 2px;
//   transform: scale(0.5);
//   left: 0;
//   right: 0;
//   top: 5px;
//   background-color: rgb(255, 255, 255);
// }

// $colors: () !default;
</style>
