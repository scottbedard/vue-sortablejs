<template>
  <div class="gap-6 grid py-6">
    <div>
      <h1 class="font-bold font-mono text-2xl">
        <a
          class="hover:text-blue-600 hover:underline"
          href="https://github.com/scottbedard/vue-sortablejs"
          target="_blank">
          @bedard/vue-sortablejs
        </a>
      </h1>

      <div class="text-gray-800 tracking-wide">
        A minimalist interface for <a class="hover:text-blue-600 hover:underline" href="https://sortablejs.github.io/Sortable/" target="_blank">Sortablejs</a>, no components required.
      </div>
    </div>

    <div>
      <Component
        v-for="example in visibleExamples"
        :id="example.id"
        :is="example.component" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Grid from './examples/Grid.vue'
import Handle from './examples/Handle.vue'
import List from './examples/List.vue'
import SharedList from './examples/SharedList.vue'

type Example = { component: any, id: string }

/**
 * Examples
 */
const examples: Example[] = [
  {
    id: 'simple-list',
    component: List,
  },
  {
    id: 'handle',
    component: Handle,
  },
  {
    id: 'grid',
    component: Grid,
  },
  {
    id: 'shared-list',
    component: SharedList,
  },
]

/**
 * Route
 */
const route = useRoute()

/**
 * Visible examples
 */
const visibleExamples = computed(() => {
  return examples.filter(obj => {
    if (typeof route.query.example !== 'string') {
      return true
    }

    return route.query.example === obj.id
  })
})

</script>