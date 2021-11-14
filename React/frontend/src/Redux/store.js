import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export const persistor = persistStore(store);

export default { store, persistor };
