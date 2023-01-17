<template>
  <div
    class="border-t-2 border-gray-300 gap-2 grid py-8"
    :data-debug="JSON.stringify(debug)">
    <h3>
      <a
        v-text="title"
        class="leading-none font-bold text-xl tracking-wider"
        :href="`/?example=${id}`" />
    </h3>

    <div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { kebabCase } from 'lodash-es'

defineProps<{
  debug?: any
  id: string
  title: string
}>()
</script>