import { takeEvery, call, put } from "redux-saga/effects";
import { setContacts, setContactsLoadError } from "./contacts-action";
import { fetchContacts } from "../../api/contacts-api";
import { LOAD } from "./constants";

export function* handleContactsLoad() {
  try {
    const contacts = yield call(fetchContacts);
    yield put(setContacts(contacts));
  } catch (error) {
    console.log(error);
    yield put(setContactsLoadError("An error occurred while loading contacts"));
  }
}

export default function* watchContactsLoad() {
  yield takeEvery(LOAD, handleContactsLoad);
}
