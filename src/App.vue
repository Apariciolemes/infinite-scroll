<script setup lang="ts">
  import CharacterList from '@/components/CharacterList/index.vue'
</script>

<template>
  <main class="md:mx-auto max-w-screen-md py-10">
    <character-list />
  </main>
</template>

<style lang="postcss">
  body {
    @apply bg-thunder-950;
  }
</style>
