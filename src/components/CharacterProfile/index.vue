<script lang="ts" setup>
  import { useIntersectionObserver } from '@/composable/useIntersectionObserver'
  import { BASE_URL_PHOTOS_CARACTERS, OPTIONS_TRANSITION } from '@/constants'
  import { ICharacter } from '@/interfaces'
  import { ref } from 'vue'

  const props = defineProps<{
    character: ICharacter
  }>()

  const loadImage = ref<boolean>(false)
  const currentImage = ref<string | null>(null)

  const callbackLoadImage = () => {
    currentImage.value = `${BASE_URL_PHOTOS_CARACTERS}${props.character.id}.jpg`
  }

  const { targetRef } = useIntersectionObserver(callbackLoadImage)
</script>

<template>
  <section ref="targetRef" class="shadow-2xl rounded-2xl py-8 px-6 bg-white">
    <div class="flex justify-center">
      <div class="flex justify-center relative w-[480px] h-[480px]">
        <div
          class="w-full h-full animate-pulse bg-slate-200 rounded absolute transition-opacity duration-300"
          :class="{ 'opacity-0': loadImage }"
        ></div>

        <img
          :src="currentImage ?? ''"
          :alt="character.name"
          class="w-full h-full rounded shadow-lg object-cover absolute transition-opacity duration-300"
          :class="{ 'opacity-0': !loadImage }"
          @load="loadImage = true"
        />
      </div>
    </div>
    <h2 class="text-2xl font-semibold px-3 mt-3">{{ character.name }}</h2>
    <ul class="p-3 flex flex-col gap-2">
      <li class="text-base">
        <span class="font-bold text-xl mr-1"> Height - </span>
        {{ character.height }}
      </li>
      <li class="text-base font-medium">
        <span class="font-bold text-xl mr-1"> Mass - </span>
        {{ character.mass }}
      </li>
      <li class="text-base font-medium">
        <span class="font-bold text-xl mr-1">Hair Color - </span>
        {{ character.hair_color }}
      </li>
      <li class="text-base font-medium">
        <span class="font-bold text-xl mr-1">Skin Color - </span>
        {{ character.skin_color }}
      </li>
    </ul>
  </section>
</template>
