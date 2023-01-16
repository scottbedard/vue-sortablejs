<template>
  <div class="gap-6 grid py-4">
    <div class="gap-px grid">
      <h1 class="font-bold font-mono text-2xl">
        <a
          class="hover:text-blue-500"
          href="https://github.com/scottbedard/vue-sortablejs"
          target="_blank">
          @bedard/vue-sortablejs
        </a>
      </h1>

      <div class="font-bold text-gray-800 tracking-wide">
        A minimalist interface for <a class="hover:text-blue-500" href="https://sortablejs.github.io/Sortable/" target="_blank">Sortablejs</a>, no components required.
      </div>
    </div>

    <div class="gap-6 grid">
      <List />

      <Handle />

      <Grid />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Grid from './examples/Grid.vue'
import Handle from './examples/Handle.vue'
import List from './examples/List.vue'
</script>