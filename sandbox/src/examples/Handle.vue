<style scoped>
.container {
  @apply gap-2 grid max-w-sm;
}

.box {
  @apply bg-white border border-gray-200 h-12 flex gap-3 items-center px-4 text-sm tracking-wider;
}

.ghost {
  @apply bg-blue-200 opacity-30;
}
</style>

<template>
  <Example :debug="items" :id="id" title="List with handles">
    <div
      class="container"
      ref="container"
      :key="sortKey">
      <div v-for="item in items" class="box group">
        <MoveIcon
          class="cursor-grab text-gray-500 group-hover:text-gray-600"
          size="20"
          data-handle />

        <div v-text="`Item ${item}`" />
      </div>
    </div>
  </Example>
</template>

<script lang="ts" setup>
import { MoveIcon } from '@bedard/vue-lucide'
import { ref } from 'vue'
import { sort, useSortable } from '@bedard/vue-sortablejs'
import Example from '@/components/Example.vue'

defineProps<{
  id: string
}>()

const container = ref<HTMLElement>()

const items = ref([1, 2, 3, 4, 5])

const { sortKey } = useSortable(container, {
  animation: 200,
  ghostClass: 'ghost',
  handle: '[data-handle]',
  onSort: (e: any) => {
    sort(items, e)
  },
})
</script>
