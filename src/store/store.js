import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authSlice from "./authSlice";
import userSlice from "./userSlice";
import educationSlice from "./educationSlice";
import projectSlice from "./projectSlice";
import skillSlice from "./skillSlice";

const rootReducer = combineReducers({
    auth: authSlice,
    user: userSlice,
    education: educationSlice,
    projects: projectSlice,
    skill: skillSlice
});

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    blacklist: [''],
    debug: false
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
});

store.dispatch;

export let persistor = persistStore(store);
