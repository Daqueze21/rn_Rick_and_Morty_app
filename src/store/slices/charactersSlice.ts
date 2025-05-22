import { Character } from '@/src/constants/characters';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface CharactersState {
  charactersList: Character[];
  // hasMoreData: boolean;
}

const initialState: CharactersState = {
  charactersList: [],
  // hasMoreData: true,
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
      // if (action.payload.length === 0) {
      //   state.hasMoreData = false;
      // }
    },
    // setHasMore(state, action: PayloadAction<boolean>) {
    //   state.hasMore = action.payload;
    // },
  },
});

export const { resetCharacters, appendCharacters } =
  charactersSlice.actions;
export default charactersSlice.reducer;
