import { ICharactersResponseDTO } from '@/interfaces'

export const mockListCharactersPage1 = {
  count: 10,
  next: 'https://swapi.dev/api/people/?page=2',
  previous: null,
  results: [
    {
      name: 'Anakin Skywalker',
      height: '188',
      mass: '84',
      hair_color: 'blond',
      skin_color: 'fair',
      url: 'https://swapi.dev/api/people/11/'
    },
    {
      name: 'Wilhuff Tarkin',
      height: '180',
      mass: 'unknown',
      hair_color: 'auburn, grey',
      skin_color: 'fair',
      url: 'https://swapi.dev/api/people/12/'
    },
    {
      name: 'Chewbacca',
      height: '228',
      mass: '112',
      hair_color: 'brown',
      skin_color: 'unknown',
      url: 'https://swapi.dev/api/people/13/'
    },
    {
      name: 'Han Solo',
      height: '180',
      mass: '80',
      hair_color: 'brown',
      skin_color: 'fair',
      url: 'https://swapi.dev/api/people/14/'
    },
    {
      name: 'Greedo',
      height: '173',
      mass: '74',
      hair_color: 'n/a',
      skin_color: 'green',
      url: 'https://swapi.dev/api/people/15/'
    },
    {
      name: 'Jabba Desilijic Tiure',
      height: '175',
      mass: '1358',
      hair_color: 'n/a',
      skin_color: 'green-tan, brown',
      url: 'https://swapi.dev/api/people/16/'
    },
    {
      name: 'Wedge Antilles',
      height: '170',
      mass: '77',
      hair_color: 'brown',
      skin_color: 'fair',
      url: 'https://swapi.dev/api/people/18/'
    },
    {
      name: 'Jek Tono Porkins',
      height: '180',
      mass: '110',
      hair_color: 'brown',
      skin_color: 'fair',
      url: 'https://swapi.dev/api/people/19/'
    },
    {
      name: 'Yoda',
      height: '66',
      mass: '17',
      hair_color: 'white',
      skin_color: 'green',
      url: 'https://swapi.dev/api/people/20/'
    },
    {
      name: 'Palpatine',
      height: '170',
      mass: '75',
      hair_color: 'grey',
      skin_color: 'pale',
      url: 'https://swapi.dev/api/people/21/'
    }
  ]
}

export const mockListCharactersPage2: ICharactersResponseDTO = {
  count: 10,
  next: 'https://swapi.dev/api/people/?page=3',
  previous: 'https://swapi.dev/api/people/?page=1',
  results: [
    {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond',
      skin_color: 'fair',
      url: 'https://swapi.dev/api/people/1/'
    },
    {
      name: 'C-3PO',
      height: '167',
      mass: '75',
      hair_color: 'n/a',
      skin_color: 'gold',
      url: 'https://swapi.dev/api/people/2/'
    },
    {
      name: 'R2-D2',
      height: '96',
      mass: '32',
      hair_color: 'n/a',
      skin_color: 'white, blue',
      url: 'https://swapi.dev/api/people/3/'
    },
    {
      name: 'Darth Vader',
      height: '202',
      mass: '136',
      hair_color: 'none',
      skin_color: 'white',
      url: 'https://swapi.dev/api/people/4/'
    },
    {
      name: 'Leia Organa',
      height: '150',
      mass: '49',
      hair_color: 'brown',
      skin_color: 'light',
      url: 'https://swapi.dev/api/people/5/'
    },
    {
      name: 'Owen Lars',
      height: '178',
      mass: '120',
      hair_color: 'brown, grey',
      skin_color: 'light',
      url: 'https://swapi.dev/api/people/6/'
    },
    {
      name: 'Beru Whitesun Lars',
      height: '165',
      mass: '75',
      hair_color: 'brown',
      skin_color: 'light',
      url: 'https://swapi.dev/api/people/7/'
    },
    {
      name: 'R5-D4',
      height: '97',
      mass: '32',
      hair_color: 'n/a',
      skin_color: 'white, red',
      url: 'https://swapi.dev/api/people/8/'
    },
    {
      name: 'Biggs Darklighter',
      height: '183',
      mass: '84',
      hair_color: 'black',
      skin_color: 'light',
      url: 'https://swapi.dev/api/people/9/'
    },
    {
      name: 'Obi-Wan Kenobi',
      height: '182',
      mass: '77',
      hair_color: 'auburn, white',
      skin_color: 'fair',
      url: 'https://swapi.dev/api/people/10/'
    }
  ]
}

export const mockListCharactersEmpty: ICharactersResponseDTO = {
  count: 0,
  next: null,
  previous: null,
  results: []
}
