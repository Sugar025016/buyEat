<template>
  <div class="modal-dialog modal-dialog-centered ">
    <div class="modal-content">
      <div class="modal-header">
        <el-button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></el-button>
        <div class="image-container">
          <img src="@/assets/images/product001.jpeg" alt="a" />
        </div>
      </div>

      <div class="modal-body">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">糖心蛋</h1>
        <div class="modal-body-content">
          <span>糖心蛋</span>
          <input type="text" class="rounded-input" placeholder="输入文本" />
          <span>糖心蛋</span>
          <input type="text" class="rounded-input" placeholder="输入文本" />
          <span>糖心蛋</span>
          <input type="text" class="rounded-input" placeholder="输入文本" />
        </div>
      </div>
      <div class="modal-footer">
        <div class="count">
          <el-button type="button" class="btn btn-primary btn-count">
            <el-icon><Minus /></el-icon>
          </el-button>

          <span>count</span>

          <el-button type="button" class="btn btn-primary btn-count">
            <el-icon><Plus /></el-icon>
          </el-button>
        </div>
        <el-button type="button" class="btn btn-primary">
          加入購物車
          <span>$50</span>
        </el-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>

@import "@/styles/bootstrap.scss";
@import "../node_modules/bootstrap/scss/_modal.scss";
@import "../../../../../node_modules/bootstrap/scss/close";


.modal-dialog {
  .modal-content {
    border-radius: 20px;

    .btn-close {
      background-color: white;
      border-radius: 20px;
      position: absolute;
      top: 30px;
      right: 30px;
      // top:1;
    }
    .modal-header {
      height: 200px;
      width: 100%;
      background: url('@/assets/images/product001.jpeg') no-repeat;
      background-position: center;
      background-size: cover;
    }
    .modal-body {
      h1 {
        margin-bottom: 30px;
      }
      h1::after {
        content: '';
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #919090;
        transform: translateY(50%);
      }

      .modal-body-content {
        display: flex;
        flex-direction: column;
        .rounded-input {
          padding: 0 10px;
          border: 1px solid #ccc;
          border-radius: 20px;
          margin-bottom: 10px;
        }
        span {
          margin: 5px;
        }
      }
    }
    .modal-footer {
      display: flex;
      justify-content: space-between;

      .btn {
        border-radius: 20px;
        background-color: $color;
        border: 0;
      }

      .count {
        .btn-count {
          margin: 0 20px;
        }
      }
    }
  }
}
</style>
