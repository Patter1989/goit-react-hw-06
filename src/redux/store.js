import { configureStore } from "@reduxjs/toolkit";
import { ContactsReducer } from "./contacts/contactsReducer";
import { FilterReducer } from "./filter/filterReducer";
import storage from "redux-persist/lib/storage";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";

const contactsConfig = {
	key: "contactsKey",
	storage,
	whitelist: ["contacts"], 
};

export const store = configureStore({
	reducer: {
		contacts: persistReducer(contactsConfig, ContactsReducer),
		filter: FilterReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);