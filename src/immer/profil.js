
import { createSlice } from "@reduxjs/toolkit";

const profilSlice = createSlice({
    name: "profil",
    initialState: {nom: "Sara",age: 20,actif: true},
    reducers: {
        modifierNom(state, action) {
            state.nom = action.payload;
        },

        augmenterAge(state) {
            state.age = state.age + 1;
        },

        changerStatut(state) {
            state.actif = !state.actif;
        },

        reinitialiser() {
            return {
                nom: "Sara",
                age: 20,
                actif: true
            };
        }
    }
});

export const {
    modifierNom,
    augmenterAge,
    changerStatut,
    reinitialiser
} = profilSlice.actions;

export default profilSlice.reducer;
