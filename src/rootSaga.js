import { all } from "redux-saga/effects";
import contactsSaga from "./module/contacts/contactsSaga";

export default function* rootSaga() {
  yield all([contactsSaga()]);
}
