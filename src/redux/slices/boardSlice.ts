import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BoardState {
    currentBoardId: null | number;
    currentBoardTitle: null | string;
}

const initialState: BoardState = {
    currentBoardId: null,
    currentBoardTitle: null,
};

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        setCurrentBoardId(state, action: PayloadAction<number>) {
            state.currentBoardId = action.payload;
        },
        setCurrentBoardTitle(state, action: PayloadAction<string>) {
            state.currentBoardTitle = action.payload;
        },
    },
});

export const { setCurrentBoardId, setCurrentBoardTitle } = boardSlice.actions;

export default boardSlice.reducer;
