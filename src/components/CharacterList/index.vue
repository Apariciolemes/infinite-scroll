<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { GetCharactersQuery, ICharacter, ICharacterResponseDTO } from '../../interfaces'
  import { getCharacters } from '../../services'
  import CharacterProfile from '../CharacterProfile/index.vue'
  import { useInfiniteScroll } from '../../composable/useInfiniteScroll'

  const listCharacters = ref<Array<ICharacter>>([])
  const page = ref<number>(1)
  const isLoading = ref<boolean>(false)

  onMounted(() => {
    fetchCharacters()
  })

  const getIDFromURL = (url: string): number => {
    const match = url.match(/\/people\/(\d+)\//)
    const id = match ? match[1] : null

    const DEFAULT_ID_LOAD_IMAGE = 1

    if (!id) {
      return DEFAULT_ID_LOAD_IMAGE
    }

    return Number(id)
  }

  const setCharactersToList = (results: Array<ICharacterResponseDTO>) => {
    const charactersWithID = results.map((character: ICharacterResponseDTO) => {
      return {
        ...character,
        id: getIDFromURL(character.url)
      }
    })

    if (listCharacters.value.length > 9) {
      listCharacters.value = [...listCharacters.value, ...charactersWithID]
      return
    }

    listCharacters.value = charactersWithID
  }

  const fetchCharacters = async (query?: GetCharactersQuery) => {
    try {
      const response = await getCharacters(query)
      setCharactersToList(response.results)
    } catch (error) {
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }

  const loadMoreCharacters = async () => {
    const START_INFINITE_SCROLL = 10

    if (listCharacters.value.length < START_INFINITE_SCROLL) return

    page.value = page.value + 1
    isLoading.value = true
    fetchCharacters({ page: page.value })
  }

  const { targetRef: sentinel } = useInfiniteScroll(loadMoreCharacters)

  defineExpose()
</script>

<template>
  <article class="flex flex-col gap-4">
    <character-profile
      :character="character"
      v-for="(character, index) in listCharacters"
      :key="index"
    />
    <div ref="sentinel" class="load-more">
      <div v-if="isLoading">Loading more...</div>
    </div>
  </article>
</template>
