<template>
  <div class="gap-6 grid pt-4">
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
    </div>
  </div>
</template>

<script lang="ts" setup>
import List from './examples/List.vue'
import Grid from './examples/Grid.vue'
</script>