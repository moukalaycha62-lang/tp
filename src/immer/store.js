
import { configureStore } from "@reduxjs/toolkit";

import compteurReducer from "./compteur";
import fenetreReducer from "./fenetre";
import themeReducer from "./theme";
import profilReducer from "./profil";
import etudiantReducer from "./etudiant";
import tacheReducer from "./tache";

const store = configureStore({
    reducer: {
        compteur: compteurReducer,
        fenetre: fenetreReducer,
        theme: themeReducer,
        profil: profilReducer,
        etudiant: etudiantReducer,
        tache: tacheReducer
    }
});

export default store;
