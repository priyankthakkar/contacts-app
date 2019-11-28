import { LOAD_ERROR } from "./constants";

const INTIAL_STATE = null;

const contactsErrorReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_ERROR:
      return action.error;
    default:
      return state;
  }
};

export default contactsErrorReducer;
