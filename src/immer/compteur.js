
import { createSlice } from "@reduxjs/toolkit";

const compteurSlice = createSlice({
    name: "compteur",
    initialState: 0,
    reducers: {
        incrementer(state) {
            return state + 1;
        },
        decrementer(state) {
            return state - 1;
        },
        ajouterValeur(state, action) {
            return state + action.payload;
        },
        remettreAZero() {
            return 0;
        }
    }
});

export const {
    incrementer,
    decrementer,
    ajouterValeur,
    remettreAZero
} = compteurSlice.actions;

export default compteurSlice.reducer;
