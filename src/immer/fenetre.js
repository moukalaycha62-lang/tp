
import { createSlice } from "@reduxjs/toolkit";

const fenetreSlice = createSlice({
    name: "fenetre",
    initialState: false,
    reducers: {
        afficher() {
            return true;
        },
        masquer() {
            return false;
        },
        basculer(state) {
            return !state;
        }
    }
});

export const { afficher, masquer, basculer } = fenetreSlice.actions;

export default fenetreSlice.reducer;
