<style scoped>
.container {
  @apply max-w-sm;
}

.box {
  @apply border h-12 flex items-center mb-2 px-4 text-sm tracking-wider;
}

.ghost {
  @apply bg-blue-200 opacity-30;
}
</style>

<template>
  <Example :debug="debug" :id="id" title="Shared list">
    <div class="gap-6 grid grid-cols-2 max-w-3xl">
      <div
        class="container"
        ref="firstContainer"
        :key="firstSortKey">
        <div
          v-for="item in firstItems"
          v-text="`Item #${item}`"
          :class="['box', {
            'bg-white border-gray-200': item <= 5,
            'bg-yellow-100 border-yellow-200': item > 5,
          }]" />
      </div>

      <div
        class="container"
        ref="secondContainer"
        :key="secondSortKey">
        <div
          v-for="item in secondItems"
          v-text="`Item #${item}`"
          :class="['box', {
            'bg-white border-gray-200': item <= 5,
            'bg-yellow-100 border-yellow-200': item > 5,
          }]" />
      </div>
    </div>
  </Example>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { sort, transfer, useSortable } from '@bedard/vue-sortablejs'
import Example from '@/components/Example.vue'

defineProps<{
  id: string
}>()

const firstContainer = ref<HTMLElement>()

const secondContainer = ref<HTMLElement>()

const firstItems = ref([1, 2, 3, 4, 5])

const secondItems = ref([6, 7, 8, 9, 10])

const debug = computed(() => {
  return {
    firstItems: firstItems.value,
    firstSortKey: firstSortKey.value,
    secondItems: secondItems.value,
    secondSortKey: secondSortKey.value,
  }
})

const { sortKey: firstSortKey } = useSortable(firstContainer, {
  animation: 200,
  ghostClass: 'ghost',
  group: 'shared',
  onAdd: e => transfer(firstItems, secondItems, e),
  onSort: e => sort(firstItems, e),
})

const { sortKey: secondSortKey } = useSortable(secondContainer, {
  animation: 200,
  ghostClass: 'ghost',
  group: 'shared',
  onAdd: e => transfer(secondItems, firstItems, e),
  onSort: e => sort(secondItems, e),
})
</script>
