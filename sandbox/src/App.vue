<template>
  <div class="gap-6 grid py-4">
    <h1 class="font-bold font-mono text-3xl">
      <a
        class="hover:text-blue-500"
        href="https://github.com/scottbedard/vue-sortablejs">
        @bedard/vue-sortablejs
      </a>
    </h1>

    <div class="gap-6 grid">
      <List />

      <Grid />

      <Handle />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Grid from './examples/Grid.vue'
import Handle from './examples/Handle.vue'
import List from './examples/List.vue'
</script>