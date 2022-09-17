import {all, call, put, takeEvery} from "redux-saga/effects";
import MainModelActionTypeKey from "./MainModelActionTypeKey";
import {
      mainModelLoadSuccess, 
} from "./MainModelActionCreators";
import {SagaIterator} from "redux-saga";
import {
      fetchInitialMainModel, 
    } from "../../adapters/MainModelAdapter";
import { MainModel } from "../../adapters/models/main-model/MainModel";
import { saga } from "@unifocus/react-application";
import { fetchPropertyData } from "../property/PropertyActionCreators";

export function* setupSaga(): SagaIterator {
   const mainModel: MainModel = yield call(fetchInitialMainModel);
   yield put(mainModelLoadSuccess(mainModel));
   yield put(fetchPropertyData(mainModel.propertyLink.getHref()));
}
 
export function* watchMainModel() {
   yield all([
      takeEvery(MainModelActionTypeKey.LOAD_INITIAL_MAIN_MODEL, saga(setupSaga)),
   ]);
}
 