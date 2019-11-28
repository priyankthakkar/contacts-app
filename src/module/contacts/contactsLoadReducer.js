import { LOAD, LOAD_SUCCESS, LOAD_ERROR } from "./constants";

const INTIAL_STATE = false;

const contactsLoadReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case LOAD:
      return true;
    case LOAD_SUCCESS:
    case LOAD_ERROR:
      return false;
    default:
      return state;
  }
};

export default contactsLoadReducer;
