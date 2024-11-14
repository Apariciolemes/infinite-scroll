<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue'
  import { GetCharactersQuery, ICharacter, ICharacterResponseDTO } from '@/interfaces'
  import { getCharacters } from '@/services'
  import { useIntersectionObserver } from '@/composable/useIntersectionObserver'
  import { OPTIONS_TRANSITION } from '@/constants'

  import CharacterProfile from '../CharacterProfile/index.vue'
  import CharacterFilter from '@/components/CharacterFilter/index.vue'

  const listCharacters = ref<Array<ICharacter>>([])
  const FIRST_PAGE = 1

  const filterParams = ref<GetCharactersQuery>({
    page: FIRST_PAGE,
    search: null
  })
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
    const charactersWithID = buildListWithIds(results)

    if (listCharacters.value.length > 9) {
      listCharacters.value = [...listCharacters.value, ...charactersWithID]
      return
    }

    listCharacters.value = charactersWithID
  }

  const fetchCharacters = async (query?: GetCharactersQuery) => {
    isLoading.value = true
    try {
      const response = await getCharacters(query)
      setCharactersToList(response.results)
    } catch (error) {
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }

  const buildListWithIds = (results: Array<ICharacterResponseDTO>) => {
    return results.map((character: ICharacterResponseDTO) => {
      return {
        ...character,
        id: getIDFromURL(character.url)
      }
    })
  }

  const resetListCharacters = () => (listCharacters.value = [])
  const listCharactersLength = computed(() => listCharacters.value.length)

  const filterCharacterByName = async (name: string) => {
    resetListCharacters()
    filterParams.value = {
      search: name,
      page: FIRST_PAGE
    }
    fetchCharacters(filterParams.value)
  }

  const loadMoreCharacters = async () => {
    const SIZE_LIST_START_INFINITE_SCROLL = 10
    const noHasInfiniteScroll = listCharactersLength.value < SIZE_LIST_START_INFINITE_SCROLL

    if (noHasInfiniteScroll) return

    filterParams.value.page = filterParams.value.page + 1
    fetchCharacters(filterParams.value)
  }

  const { targetRef: sentinel } = useIntersectionObserver(loadMoreCharacters)
</script>

<template>
  <article class="flex flex-col gap-4" id="character-list">
    <character-filter @emit-filter="filterCharacterByName" />
    <transition-group
      :enter-from-class="OPTIONS_TRANSITION.enterFromClass"
      :leave-from-class="OPTIONS_TRANSITION.leaveFromClass"
      :enter-active-class="OPTIONS_TRANSITION.enterActiveClass"
    >
      <character-profile
        v-for="character in listCharacters"
        :key="character.id"
        :character="character"
      />
    </transition-group>
    <div ref="sentinel" class="load-more">
      <div v-if="isLoading" class="text-white text-base">Loading more...</div>
    </div>
  </article>
</template>
