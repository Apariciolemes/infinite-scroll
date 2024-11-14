<script lang="ts" setup>
  import BaseTextField from '@/components/BaseTextField/index.vue'
  import { debounceFn } from '@/utils'

  const emit = defineEmits<{
    (e: 'emit-filter', name: string): void
  }>()

  const onSearch = ([name]: string) => {
    emit('emit-filter', name)
  }

  const debounceEmit = debounceFn(onSearch)
</script>

<template>
  <section class="section bg-gray-200 w-full p-8 rounded shadow-2xl">
    <h2 class="font-semibold text-2xl mb-2">Filter Characters:</h2>
    <BaseTextField @input="debounceEmit" />
  </section>
</template>
