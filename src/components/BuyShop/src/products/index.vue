<template>
  <div class="tabs">
    <div class="tabs-header">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: activeTab === index }"
        @click="changeTab(index)"
      >
        <span class="tab-label">{{ tab.label }}</span>
        <span class="underline"></span>
      </div>
    </div>
    <div class="tabs-content">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        v-show="activeTab === index"
      >
        {{ tab.content }}
      </div>
    </div>
  </div>
  <div class="container">
    <div class="divider"></div>
    <div class="content"></div>
  </div>

  <div class="products-body">
    <productsCard></productsCard>
    <productsCard></productsCard>
    <productsCard></productsCard>
    <productsCard></productsCard>
    <productsCard></productsCard>
    <productsCard></productsCard>
    <productsCard></productsCard>
    <productsCard></productsCard>
    <productsCard></productsCard>
    <productsCard></productsCard>
    <productsCard></productsCard>
  </div>

  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    Launch static backdrop modal
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <product></product>
  </div>
</template>

<script setup lang="ts">
import productsCard from '.././productsCard/index.vue'
import product from '.././product/index.vue'
import { reactive, ref } from 'vue'

const showModal = ref(false)

const openModal = () => {
  showModal.value = !showModal.value
}

const closeModal = () => {
  showModal.value = false
}

interface Tab {
  label: string
  content: string
}

const tabs: Tab[] = [
  { label: 'Tab 1------------', content: 'Content 1' },
  { label: 'Tab 2', content: 'Content 2' },
  { label: 'Tab 3', content: 'Content 3' },
  { label: 'Tab 3', content: 'Content 3' },
  { label: 'Tab 3', content: 'Content 3' },
  { label: 'Tab 3', content: 'Content 3' },
  { label: 'Tab 3', content: 'Content 3' },
  { label: 'Tab 3', content: 'Content 3' },
  { label: 'Tab 3', content: 'Content 3' },
  { label: 'Tab 3', content: 'Content 3' },
  { label: 'Tab 3', content: 'Content 3' },
  { label: 'Tab 3', content: 'Content 3' },
  { label: 'Tab 3', content: 'Content 3' },
  // { label: 'Tab 3', content: 'Content 3' },
  // { label: 'Tab 3', content: 'Content 3' },
  // { label: 'Tab 3', content: 'Content 3' },
  // { label: 'Tab 3', content: 'Content 3' },
  // { label: 'Tab 3', content: 'Content 3' },
]

const activeTab = ref(0)

const changeTab = (index: number) => {
  activeTab.value = index
}

// const dialogFormVisible = ref(false)
// const formLabelWidth = '140px'

// const form = reactive({
//   name: '',
//   region: '',
//   date1: '',
//   date2: '',
//   delivery: false,
//   type: [],
//   resource: '',
//   desc: '',
// })
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal?.addEventListener('shown.bs.modal', () => {
  myInput?.focus()
})

</script>

<style lang="scss" scoped>

@import "@/styles/bootstrap.scss";
@import "../../../../../node_modules/bootstrap/scss/buttons";





.modal {
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
}

.tabs-header {
  display: flex;
  margin: 20px 0 0 0;
  color: #636262;
  border-bottom: 1px solid #63626236;
  white-space: nowrap;
  overflow-x: auto;
}

.tabs-header div {
  position: relative;
  padding: 0 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.tabs-header .tab-label {
  display: inline-block;
  position: relative;
  padding: 16px 0;
  z-index: 1;
}

.tabs-header .underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: transparent;
  transition: background-color 0.2s;
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
}

.tabs-header div:hover .underline {
  border-bottom: 3px solid $color;
}

.tabs-header div:hover {
  color: #000000;
}

.tabs-content {
  font-size: 30px;
  margin: 10px;
  border-bottom: #636262;
  display: flex;
  align-items: center;
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
}
</style>
