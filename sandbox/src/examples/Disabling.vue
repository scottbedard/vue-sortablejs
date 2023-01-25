<template>
  <Example title="Disabling" :id="id">
    <Checkbox
      v-model="disabled"
      label="Disable sorting" />
  </Example>
</template>

<script lang="ts" setup>
import Checkbox from '@/components/Checkbox.vue'
import Example from '@/components/Example.vue'
import { ref } from 'vue'

const disabled = ref(false)

defineProps<{
  id: string
}>()
</script>