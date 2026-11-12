
import { createSlice } from "@reduxjs/toolkit";

const tacheSlice = createSlice({
    name: "tache",

    initialState: [
        { id: 1, titre: "Réviser React", termine: false },
        { id: 2, titre: "Pratiquer Redux", termine: true }
    ],

    reducers: {
        ajouterTache(state, action) {
            state.push(action.payload);
        },

        terminerTache(state, action) {
            const tache = state.find(
                t => t.id === action.payload
            );

            if (tache) {
                tache.termine = true;
            }
        },

        basculerTache(state, action) {
            const tache = state.find(
                t => t.id === action.payload
            );

            if (tache) {
                tache.termine = !tache.termine;
            }
        },

        supprimerTache(state, action) {
            return state.filter(
                t => t.id !== action.payload
            );
        },

        supprimerTerminees(state) {
            return state.filter(t => !t.termine);
        }
    }
});

export const {
    ajouterTache,
    terminerTache,
    basculerTache,
    supprimerTache,
    supprimerTerminees
} = tacheSlice.actions;

export default tacheSlice.reducer;
