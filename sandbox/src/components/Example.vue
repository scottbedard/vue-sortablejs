<template>
  <div class="gap-2 grid">
    <h3
      v-text="title"
      class="font-bold text-xl" />

    <div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>