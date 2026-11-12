
import { useSelector, useDispatch } from "react-redux";
import {incrementer,decrementer,ajouterValeur,remettreAZero} from "./immer/compteur";
import {afficher,masquer,basculer} from "./immer/fenetre";
import {changerTheme,basculerTheme} from "./immer/theme";
import {modifierNom,augmenterAge,changerStatut,reinitialiser} from "./immer/profil";
import {ajouterEtudiant,modifierNote,supprimerEtudiant,augmenterNotes} from "./immer/etudiant";

import {ajouterTache,terminerTache,basculerTache,supprimerTache,supprimerTerminees}from "./immer/tache";
function App() {
    const compteur = useSelector(state => state.compteur);
    const fenetre = useSelector(state => state.fenetre);
    const theme = useSelector(state => state.theme);
    const profil = useSelector(state => state.profil);
    const etudiants = useSelector(state => state.etudiant.etudiants);
    const taches = useSelector(state => state.tache);
    const dispatch = useDispatch();

    return (
        <div style={{
            backgroundColor: theme === "clair" ? "white" : "#222",
            color: theme === "clair" ? "black" : "white",
            minHeight: "100vh",
            padding: "20px"
        }}>

            <h1> Compteur</h1>

            <h2>Compteur : {compteur}</h2>

            <button onClick={() => dispatch(incrementer())}>Incrementer</button>
            <button onClick={() => dispatch(decrementer())}>Decrementer</button>
            <button onClick={() => dispatch(ajouterValeur(5))}>Ajouter 5</button>
            <button onClick={() => dispatch(remettreAZero())}>Remettre à zéro</button>

            <hr />

            <h1> Fenêtre</h1>

            <button onClick={() => dispatch(afficher())}>Afficher</button>
            <button onClick={() => dispatch(masquer())}>Masquer</button>
            <button onClick={() => dispatch(basculer())}>Basculer</button>

            {fenetre && <h2>La fenêtre est affichée</h2>}

            <hr />

            <h1> Thème</h1>

            <h2>Thème actuel : {theme}</h2>

            <button onClick={() => dispatch(changerTheme("clair"))}>Clair</button>
            <button onClick={() => dispatch(changerTheme("sombre"))}>Sombre</button>
            <button onClick={() => dispatch(basculerTheme())}>Basculer le thème</button>

            <hr />

            <h1> Profil utilisateur</h1>

            <h2>Nom : {profil.nom}</h2>
            <h2>Age : {profil.age}</h2>
            <h2>Statut : {profil.actif ? "Actif" : "Inactif"}</h2>

            <button onClick={() => dispatch(modifierNom("Salma"))}>
                Modifier nom
            </button>

            <button onClick={() => dispatch(augmenterAge())}>
                Augmenter âge
            </button>

            <button onClick={() => dispatch(changerStatut())}>
                Changer statut
            </button>

            <button onClick={() => dispatch(reinitialiser())}>
                Réinitialiser
            </button>

<hr />

<h1>Gestion des étudiants</h1>

{etudiants.map(e => (
    <div key={e.id}>
        <p>
            {e.nom} - Note : {e.note}
        </p>

        <button onClick={() =>
            dispatch(modifierNote({
                id: e.id,
                note: 12
            }))
        }>
            Modifier note
        </button>

        <button onClick={() =>
            dispatch(supprimerEtudiant(e.id))
        }>
            Supprimer
        </button>
    </div>
))}

<button onClick={() =>
    dispatch(ajouterEtudiant({
        id: 4,
        nom: "Sara",
        note: 15
    }))
}>
    Ajouter étudiant
</button>

<button onClick={() => dispatch(augmenterNotes())}>
    Augmenter toutes les notes
</button>

<hr />

<h1> Liste des tâches</h1>

{taches.map(t => (
    <div key={t.id}>
        <p>
            {t.titre} - {t.termine ? "Terminée" : "En cours"}
        </p>

        <button onClick={() =>
            dispatch(terminerTache(t.id))
        }>
            Terminer
        </button>

        <button onClick={() =>
            dispatch(basculerTache(t.id))
        }>
            Basculer
        </button>

        <button onClick={() =>
            dispatch(supprimerTache(t.id))
        }>
            Supprimer
        </button>
    </div>
))}

<button onClick={() =>
    dispatch(ajouterTache({
        id: Date.now(),
        titre: "Faire les exercices",
        termine: false
    }))
}>
    Ajouter tâche
</button>

<button onClick={() =>
    dispatch(supprimerTerminees())
}>
    Supprimer les tâches terminées
</button>


        </div>
    );
}

export default App;
