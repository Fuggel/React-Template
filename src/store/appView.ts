import { createSlice } from "@reduxjs/toolkit";
import { appSettings } from "../config/AppSettings";
import { IAppViewState } from "../interfaces/IAppViewState";
import { RootState } from ".";


const initialAppViewState: IAppViewState = {
    darkMode: appSettings.darkMode,
};

const appViewSlice = createSlice({
    name: "appView",
    initialState: initialAppViewState,
    reducers: {
        toggleDarkMode(state) {
            state.darkMode = !state.darkMode;
        },
    },
});


export const selectDarkMode = (state: RootState) => state.appView.darkMode;
export const appViewActions = appViewSlice.actions;
export default appViewSlice.reducer;
