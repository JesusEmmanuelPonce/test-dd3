import thunk   from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import {configureStore}   from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'

import reducers from './reducers';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: [thunk]
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch