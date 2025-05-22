import { Character } from '@/src/constants/characters';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface CharactersState {
  charactersList: Character[];
}

const initialState: CharactersState = {
  charactersList: [],
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    resetCharacters(state) {
      state.charactersList = [];
      // state.hasMoreData = true;
    },
    appendCharacters(state, action: PayloadAction<Character[]>) {
      state.charactersList.push(...action.payload);
    },
  },
});

export const { resetCharacters, appendCharacters } =
  charactersSlice.actions;
export default charactersSlice.reducer;
