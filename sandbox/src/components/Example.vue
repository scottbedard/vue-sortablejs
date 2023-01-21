<template>
  <div
    class="border-b border-gray-500 py-6 last:border-0"
    :data-debug="JSON.stringify(debug)">

    <h3>
      <RouterLink
        v-text="title"
        class="leading-none font-bold text-xl tracking-wider"
        :to="`/?example=${id}`" />
    </h3>

    <div class="mt-2">
      <slot />
    </div>

    <div
      v-if="route.query.example"
      class="text-gray-500 tracking-wider mt-6 text-gray-800">
      <RouterLink to="/">
        ← See all examples
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink, useRoute } from 'vue-router'

defineProps<{
  debug?: any
  id: string
  title: string
}>()

const route = useRoute()
</script>