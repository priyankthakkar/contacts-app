import { LOAD, LOAD_ERROR, LOAD_SUCCESS } from "./constants";

export const loadContacts = () => ({
  type: LOAD
});

export const setContacts = contacts => ({
  type: LOAD_SUCCESS,
  contacts
});

export const setContactsLoadError = error => ({
  type: LOAD_ERROR,
  error
});
