<style scoped>
.container {
  @apply gap-2 grid max-w-sm;
}

.box {
  @apply bg-white border border-gray-200 h-12 flex items-center px-4 text-sm tracking-wider;
}

.ghost {
  @apply bg-blue-200 opacity-30;
}
</style>

<template>
  <Example :debug="items" :id="id" title="Simple list">

    <div class="mb-3">
      <Checkbox
        v-model="disabled"
        label="Disabled" />
    </div>

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
import { computed, ref } from 'vue'
import { sort, useSortable } from '@bedard/vue-sortablejs'
import Checkbox from '@/components/Checkbox.vue'
import Example from '@/components/Example.vue'

defineProps<{
  id: string
}>()

const disabled = ref(false)

const container = ref<HTMLElement>()

const items = ref([1, 2, 3, 4, 5])

const { sortKey } = useSortable(container, {
  animation: 200,
  disabled,
  ghostClass: 'ghost',
  onSort: (e: any) => sort(items, e),
})
</script>
