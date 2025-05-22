import { CharacterResponse } from '@/src/constants/characters';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query<
      CharacterResponse,
      { page: number; status?: string; gender?: string }
    >({
      query: ({ page = 1, status, gender }) => {
        const params = new URLSearchParams({
          page: String(page),
        });
        if (status) params.append('status', status);
        if (gender) params.append('gender', gender);
        return `character?${params.toString()}`;
      },
    }),
  }),
});

export const { useGetCharactersQuery } = api;