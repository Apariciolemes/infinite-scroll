<script lang="ts" setup>
  import { BASE_URL_PHOTOS_CARACTERS } from '@/constants'
  import { ICharacter } from '@/interfaces'

  defineProps<{
    character: ICharacter
  }>()
</script>

<template>
  <section class="shadow-2xl rounded-2xl py-8 px-6 bg-white">
    <div class="flex justify-center">
      <img
        :src="`${BASE_URL_PHOTOS_CARACTERS}${character.id}.jpg`"
        :alt="character.name"
        class="w-[320px] rounded"
      />
    </div>
    <h2 class="text-2xl font-semibold px-3 pt-3">{{ character.name }}</h2>
    <ul class="p-3">
      <li class="text-base">
        <span class="font-bold text-xl mr-1"> Height - </span> {{ character.height }}
      </li>
      <li class="text-base font-medium">
        <span class="font-bold text-xl mr-1"> Mass - </span> {{ character.mass }}
      </li>
      <li class="text-base font-medium">
        <span class="font-bold text-xl mr-1">Hair Color - </span> {{ character.hair_color }}
      </li>
      <li class="text-base font-medium">
        <span class="font-bold text-xl mr-1">Skin Color - </span> {{ character.skin_color }}
      </li>
    </ul>
  </section>
</template>
