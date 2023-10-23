import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authSlice from "./authSlice";
import userSlice from "./userSlice";
import educationSlice from "./educationSlice";

const rootReducer = combineReducers({
    auth: authSlice,
    user: userSlice,
    education:educationSlice
});

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    blacklist: [],
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
