export interface CharacterLocation {
  name: string;
  url: string;
}

export interface ResourceBase {
  id: number;
  name: string;
  url: string;
  created: string;
}

type characterStatus = 'Dead' | 'Alive' | 'unknown';
type characterStatusFilterValues = characterStatus | '';

export const statusFilterList: characterStatusFilterValues[] = [
  'Dead',
  'Alive',
  'unknown',
  '',
];

type characterGender = 'Female' | 'Male' | 'Genderless' | 'unknown';
type characterGenderFilterValues = characterGender | '';

export const genderFilterList: characterGenderFilterValues[] = [
  'Female',
  'Male',
  'Genderless',
  'unknown',
  '',
];

export interface Character extends ResourceBase {
  status: characterStatus;
  species: string;
  type: string;
  gender: characterGender;
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
}

export interface CharacterResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

