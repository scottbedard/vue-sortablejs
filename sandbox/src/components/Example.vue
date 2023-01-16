<template>
  <div class="border-t-2 border-gray-300 gap-2 grid py-6">
    <h3>
      <a
        v-text="title"
        class="font-bold text-xl tracking-wider"
        :name="kebabCase(title)" />
    </h3>

    <div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { kebabCase } from 'lodash-es'

defineProps<{
  title: string
}>()
</script>