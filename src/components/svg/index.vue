<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  prefix: {
    type: String,
    default: '#icon-',
  },
  color: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '26px',
  },
  height: {
    type: String,
    default: '26px',
  },
});

const icon = defineAsyncComponent(() =>
  import(`../../assets/svg/${props.name}.svg`)
);


</script>

<template>
  <component :is="icon" :style="{ width, height }" class="fill-current" />
</template>