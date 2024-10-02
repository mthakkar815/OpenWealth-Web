// React
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

// 3rd Party
import storage from "redux-persist/lib/storage";

// Slices
import portfolioSlice from "./portfolioSlice";
import languageSlice from "./languageSlice";

// Config
const portfolioConfig = {
  key: "portfolio",
  storage,
};

const languageConfig = {
  key: "language",
  storage,
};

// Main
const persistedPortfolioReducer = persistReducer(portfolioConfig, portfolioSlice);
const persistedLanguageReducer = persistReducer(languageConfig, languageSlice);

const store = configureStore({
  reducer: {
    portfolioReducer: persistedPortfolioReducer,
    languageReducer: persistedLanguageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], // Ignore these actions
        ignoredPaths: ['register'], // Ignore the 'register' path in actions
      },
    }),
});
const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export { store, persistor };
