import { expect, describe, test } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import SectionProfile from './index.vue'

describe('SectionProfile', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(SectionProfile)
    expect(wrapper.html()).contain('Section')
  })
})
