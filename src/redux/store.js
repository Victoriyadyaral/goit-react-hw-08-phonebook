import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import phonebookReducer from './contacts/reducer';
import authReducer from './auth/auth-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    phonebook: phonebookReducer,
  },
  middleware: (getDefaultMiddleware) => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
],
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

const allElementOfStore = { store, persistor };

//{name: "dgfdghjghjm", email: "fsdzgdfhg@xcvfdhgfh.com", password: "fvfsdhgfdgjghjkghk"}
// dgfdhfghjg@gmail.com  
//dgfdhfghjg@gmail.com 

export default allElementOfStore;