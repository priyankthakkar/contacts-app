import { combineReducers } from "redux";
import contactsReducer from "./module/contacts/contactsReducer";
import contactsLoadReducer from "./module/contacts/contactsLoadReducer";
import contactsErrorReducer from "./module/contacts/contactsErrorReducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  areContactsLoading: contactsLoadReducer,
  error: contactsErrorReducer
});

export default rootReducer;
