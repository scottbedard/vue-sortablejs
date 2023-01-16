<template>
  <svg
    fill="currentColor"
    stroke-linecap="round" 
    stroke-linejoin="round"
    stroke="currentColor" 
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :height="size"
    :stroke-width="stroke"
    :width="size">
    <polyline points="8 18 12 22 16 18" />
    <polyline points="8 6 12 2 16 6" />
    <line x1="12" y1="2" x2="12" y2="22" />
  </svg>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  size?: string | number
  stroke?: string | number
}>(), {
  size: 20,
  stroke: 1,
})
</script>