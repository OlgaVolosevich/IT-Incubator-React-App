import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
});

let store = createStore(reducers);

export default store;
