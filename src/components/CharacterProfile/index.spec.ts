import { expect, describe, test, beforeEach } from 'vitest'
import { shallowMount, VueWrapper } from '@vue/test-utils'
import CharacterProfile from './index.vue'
import { TCharactersAttributes } from '@/interfaces'
import { ComponentInstance } from 'vue'
import { BASE_URL_PHOTOS_CARACTERS } from '@/constants'

const customProps = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  id: 1,
  url: 'https://swapi.dev/api/people/1/'
}

describe('CharacterProfile', () => {
  let wrapper: VueWrapper<ComponentInstance<typeof CharacterProfile>>

  beforeEach(() => {
    wrapper = shallowMount(CharacterProfile, {
      props: {
        character: customProps
      }
    })
  })

  test('render the correct props values', () => {
    const template = wrapper.html()
    for (const attribute in customProps) {
      if (attribute === 'url') return
      expect(template).toContain(customProps[attribute as TCharactersAttributes])
    }
  })

  test('render the correct image src', () => {
    const image = wrapper.find('img')
    expect(image.exists()).toBe(true)
    expect(image.attributes('src')).toBe(`${BASE_URL_PHOTOS_CARACTERS}${customProps.id}.jpg`) //
  })
})
