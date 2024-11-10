import { BASE_URL_API } from '@/constants'
import { GetCharactersQuery, ICharactersResponseDTO } from '@/interfaces'
import { createQueryString } from '@/utils'

export async function getCharacters(query?: GetCharactersQuery): Promise<ICharactersResponseDTO> {
  const response = await fetch(`${BASE_URL_API}people?${createQueryString(query ?? {}) ?? ''}`)
  return response.json()
}
