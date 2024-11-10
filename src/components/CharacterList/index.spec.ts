import { describe, test, vi, expect, beforeEach } from 'vitest'

import { mount, flushPromises } from '@vue/test-utils'

// components
import CharacterList from './index.vue'
import CharacterProfile from '@/components/CharacterProfile/index.vue'

// mocks
import { MockIntersectionObserver } from '@/mocks/MockIntersectionObserver'
import { mockListCharactersPage1, mockListCharactersPage2 } from '@/mocks/MockListCharacters'
import { ComponentInstance } from 'vue'
import { afterEach } from 'node:test'

const mockFetch = vi.spyOn(global, 'fetch')

const buildWrapper = () => {
  return mount(CharacterList, {
    global: {
      components: {
        CharacterProfile
      }
    }
  })
}

describe('CharacterList', async () => {
  beforeEach(() => {
    mockFetch.mockReset()
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
  })

  afterEach(() => {
    mockFetch.mockClear()
  })

  test('renders CharacterProfile components in CharacterList based on API response count', async () => {
    mockFetch.mockResolvedValue({
      status: 200,
      json: () => mockListCharactersPage1
    } as any)

    const wrapper = buildWrapper()
    expect(mockFetch).toHaveBeenCalledTimes(1)

    await flushPromises()

    expect(wrapper.findComponent(CharacterProfile).exists()).toBeTruthy()
    expect(wrapper.findAllComponents(CharacterProfile)).toHaveLength(10)
  })

  test('validate is getting correct id from URL ', async () => {
    mockFetch.mockResolvedValue({
      status: 200,
      json: () => mockListCharactersPage1
    } as any)

    const wrapper = buildWrapper()
    const vm: ComponentInstance<any> = wrapper.vm

    const MOCK_ID = 1054854
    const MOCK_URL_WITH_ID = `https://swapi.dev/api/people/${MOCK_ID}/`

    expect(vm.getIDFromURL(MOCK_URL_WITH_ID)).toBe(MOCK_ID)

    const DEFAULT_ID = 1
    const MOCK_UNEXPECTED_URL = `https://swapi.dev/ap3213i/peopl32132e/${MOCK_ID}/`

    expect(vm.getIDFromURL(MOCK_UNEXPECTED_URL)).toBe(DEFAULT_ID)
  })

  test('validate log error when API is down', async () => {
    mockFetch.mockRejectedValue({
      status: 500,
      json: 'Internal server error'
    })

    const mockConsoleError = vi.spyOn(console, 'error')

    const wrapper = buildWrapper()

    const vm: ComponentInstance<any> = wrapper.vm

    await flushPromises()

    expect(mockConsoleError).toHaveBeenCalledOnce()
    expect(vm.isLoading).toBe(false)
  })

  test('should concat with the current list when list has more than 9 elements', async () => {
    mockFetch.mockResolvedValue({
      status: 200,
      json: () => mockListCharactersPage1
    } as any)

    const wrapper = buildWrapper()
    const vm: ComponentInstance<any> = wrapper.vm

    await flushPromises()

    expect(vm.listCharacters).toHaveLength(10)

    vm.fetchCharacters()

    mockFetch.mockResolvedValue({
      status: 200,
      json: () => mockListCharactersPage2
    } as any)

    await flushPromises()

    expect(vm.listCharacters).toHaveLength(20)
  })
  test(`should load more characters when has more than 9 items`, async () => {
    mockFetch.mockResolvedValue({
      status: 200,
      json: () => mockListCharactersPage1
    } as any)

    const wrapper = buildWrapper()
    const vm: ComponentInstance<any> = wrapper.vm

    await flushPromises()

    vm.loadMoreCharacters()

    expect(mockFetch).toHaveBeenCalledTimes(2)
  })
})
