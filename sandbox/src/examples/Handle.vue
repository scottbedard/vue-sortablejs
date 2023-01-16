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
  <Example :items="items" title="List with handles">
    <div
      class="container"
      ref="container"
      :key="sortKey">
      <div v-for="item in items" class="box group">
        <MoveVerticalIcon
          class="cursor-grab text-gray-500 group-hover:text-gray-600"
          stroke="2"
          data-handle />

        <div v-text="`Item ${item}`" />
      </div>
    </div>
  </Example>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useSortable } from '@bedard/vue-sortablejs'
import Example from '@/components/Example.vue'
import MoveVerticalIcon from '@/components/MoveVerticalIcon.vue'

const container = ref<HTMLElement>()

const items = ref([1, 2, 3, 4, 5])

const {
  sort,
  sortKey,
} = useSortable(container, {
  animation: 200,
  ghostClass: 'ghost',
  handle: '[data-handle]',
  onSort: (e: any) => {
    sort(items, e)
  },
})
</script>
