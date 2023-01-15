<template>
  <div class="gap-2 grid">
    <h3>
      <a
        v-text="title"
        class="font-bold text-xl"
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