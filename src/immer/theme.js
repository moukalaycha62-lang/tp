
import { createSlice } from "@reduxjs/toolkit";
const themeSlice = createSlice({
    name: "theme",
    initialState: "clair",
    reducers: {
        changerTheme(state, action) {
            return action.payload;
        },
        basculerTheme(state) {
            return state === "clair" ? "sombre" : "clair";
        }
    }
});

export const { changerTheme, basculerTheme } = themeSlice.actions;

export default themeSlice.reducer;
