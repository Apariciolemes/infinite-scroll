<script lang="ts" setup>
  const emit = defineEmits<{
    (e: 'input', value: string): void
  }>()

  const search = defineModel<string>('')

  const onInput = () => {
    emit('input', search.value ?? '')
  }
</script>

<template>
  <input
    type="text"
    class="font-semibold w-[350px] h-10 text-base text-black rounded shadow-lg outline-none px-4"
    v-model="search"
    @input="onInput"
  />
</template>
