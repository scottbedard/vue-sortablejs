<template>
  <div>
    <div
      :class="['flex gap-2 group items-center h-6', {
        'cursor-pointer': !disabled,
        'opacity-50 pointer-events-none': disabled,
      }]"
      :data-checkbox="dataCheckbox"
      @click="toggle">
      <div
        class="bg-white border border-gray-200 flex items-center group-input-container justify-center h-6 rounded transform translate-y-px w-6 group-hover:border-gray-400"
        ref="target"
        role="checkbox"
        :aria-checked="modelValue ? 'true' : 'false'"
        :tabindex="disabled ? undefined : 0"
        @keydown.enter.stop="submitForm"
        @keypress.space.prevent="toggle">
        <svg
          class="text-blue-600 w-4/5"
          focusable="false"
          version="1.1"
          viewBox="0 0 24 24">
          <path
            d="M4.1,12.7 9,17.6 20.3,6.3"
            fill="none"
            stroke="currentColor"
            stroke-dasharray="50"
            stroke-width="4"
            :stroke-dashoffset="modelValue ? 0 : 50"
            :style="{
              transition: modelValue ? 'stroke-dashoffset 150ms ease-out' : undefined,
            }"
          />
        </svg>

        <input
          class="absolute appearance-none h-full left-0 pointer-events-none rounded-md top-0 w-full"
          tabindex="-1"
          type="checkbox"
          :checked="modelValue"
          :disabled="disabled"
          :required="required" />
      </div>

      <div
        v-if="label || $slots.default"
        :class="['label-text', {
          'label-required': required,
        }]">
        <slot>{{ label }}</slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

/**
 * Emit
 */
const emit = defineEmits<{
  (e: 'update:modelValue', checked: boolean): void
}>()

/**
 * Props
 */
const props = defineProps<{
  dataCheckbox?: string
  disabled?: boolean
  label?: string
  modelValue?: boolean
  required?: boolean
}>()

/**
 * Target
 */
const target = ref<HTMLElement>()

/**
 * Submit the closest form
 */
const submitForm = () => {
  target.value?.closest('form')?.dispatchEvent(new Event('submit'))
}

/**
 * Toggle
 */
const toggle = () => {
  target.value?.focus()

  if (!props.disabled) {
    emit('update:modelValue', !props.modelValue)
  }
}
</script>
