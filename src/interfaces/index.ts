export interface ICharacter {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  id: number
  url: string
}

export type ICharacterResponseDTO = Omit<ICharacter, 'id'>

export interface ICharactersResponseDTO {
  count: number
  next: string | null
  previous: string | null
  results: ICharacterResponseDTO[]
}

export type TCharactersAttributes = keyof ICharacter

export interface GetCharactersQuery {
  page: number
  search?: string | null
}
