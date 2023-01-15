<template>
  <div class="gap-4 grid pt-3">
    <h1 class="font-bold font-mono text-3xl">
      <a
        class="hover:text-blue-500"
        href="https://github.com/scottbedard/vue-sortablejs">
        @bedard/vue-sortable
      </a>
    </h1>

    <div>
      <Basic />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Basic from './examples/Basic.vue'
</script>