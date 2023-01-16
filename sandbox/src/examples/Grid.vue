<style scoped>
.container {
  @apply gap-2 flex flex-wrap max-w-lg;
}

.box {
  @apply aspect-square bg-white border border-gray-200 flex items-center justify-center text-center text-sm tracking-wider w-24;
}

.ghost {
  @apply bg-blue-200 opacity-30;
}
</style>

<template>
  <Example :items="items" title="Grid">
    <div
      class="container"
      ref="container"
      :key="sortKey">
      <div
        v-for="item in items"
        v-text="`Item #${item}`"
        class="box" />
    </div>
  </Example>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useSortable } from '@bedard/vue-sortablejs'
import Example from '@/components/Example.vue'

const container = ref<HTMLElement>()

const items = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])

const {
  sort,
  sortKey,
} = useSortable(container, {
  animation: 200,
  ghostClass: 'ghost',
  onSort: (e: any) => sort(items, e),
})
</script>
