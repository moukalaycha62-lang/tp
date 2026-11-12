
import { createSlice } from "@reduxjs/toolkit";

const etudiantSlice = createSlice({
    name: "etudiant",

    initialState: {
        etudiants: [
            { id: 1, nom: "Yassine", note: 14 },
            { id: 2, nom: "Ghita", note: 18 },
            { id: 3, nom: "Omar", note: 8 }
        ]
    },

    reducers: {
        ajouterEtudiant(state, action) {
            state.etudiants.push(action.payload);
        },

        modifierNote(state, action) {
            const etudiant = state.etudiants.find(
                e => e.id === action.payload.id
            );

            if (etudiant) {
                etudiant.note = action.payload.note;
            }
        },

        supprimerEtudiant(state, action) {
            state.etudiants = state.etudiants.filter(
                e => e.id !== action.payload
            );
        },

        augmenterNotes(state) {
            state.etudiants.forEach(e => {
                if (e.note < 20) {
                    e.note++;
                }
            });
        }
    }
});

export const {
    ajouterEtudiant,
    modifierNote,
    supprimerEtudiant,
    augmenterNotes
} = etudiantSlice.actions;

export default etudiantSlice.reducer;
