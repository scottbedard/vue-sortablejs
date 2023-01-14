<template>
  <div>
    <div
      ref="container"
      class="flex gap-6"
      :key="sortKey">
      <div
        v-for="item in source"
        :class="['border-2 border-dashed border-gray-400 flex h-16 items-center justify-center text-white text-xl w-16', {
          'bg-red-300 border-red-400': item === 1,
          'bg-orange-300 border-orange-400': item === 2,
          'bg-blue-300 border-blue-400': item === 3,
          'bg-green-300 border-green-400': item === 4,
          'bg-purple-300 border-purple-400': item === 5,
        }]">
        {{ item }}
      </div>
    </div>

    <pre class="mt-6 text-sm">{{ { source } }}</pre>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useSortable } from '@bedard/vue-sortablejs'

const container = ref<HTMLElement>()

const source = ref([1, 2, 3, 4, 5])

const {
  sort,
  sortKey,
} = useSortable(container, {
  animation: 200,
  ghostClass: 'opacity-50',
  onSort: (e: any) => sort(source, e),
})
</script>
