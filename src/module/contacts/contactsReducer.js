import { LOAD_SUCCESS } from "./constants";

const INTIAL_STATE = [];

const contactsReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_SUCCESS:
      console.log(action);
      return action.contacts;
    default:
      return state;
  }
};

export default contactsReducer;
