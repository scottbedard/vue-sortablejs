<template>
  <div class="gap-6 grid py-6">
    <div class="gap-px grid">
      <h1 class="font-bold font-mono text-2xl">
        <a
          class="hover:text-blue-600"
          href="https://github.com/scottbedard/vue-sortablejs"
          target="_blank">
          @bedard/vue-sortablejs
        </a>
      </h1>

      <div class="text-gray-900 tracking-wide">
        A minimalist interface for <a class="hover:text-blue-600" href="https://sortablejs.github.io/Sortable/" target="_blank">Sortablejs</a>, no components required.
      </div>
    </div>

    <div>
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