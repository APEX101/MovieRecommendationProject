import { combineReducers } from "redux";

import fetchReducer from "./FetchTopMovier";
import SearchReducer from "./Search";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["SearchReducer"],
};

const rootReducer = combineReducers({
  fetchReducer,
  SearchReducer,
});
export default persistReducer(persistConfig, rootReducer);
