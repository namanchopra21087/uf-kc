// import { SagaIterator } from "@redux-saga";
import { all, call, put, takeEvery } from "@redux-saga/core/effects";
import { saga } from "@unifocus/react-application";
import { fetchPropertyData } from "../../adapters/PropertyAdapter";
import { PropertyModel } from "../../adapters/models/property-model/PropertyModel";
import { FetchPropertyDataAction, fetchPropertyDataSuccess } from "./PropertyActionCreators";
import PropertiesActionTypeKey from "./PropertyActionTypeKey";

//tslint:disable

export function* propertyDataSaga(action: FetchPropertyDataAction) {
    const data: PropertyModel = yield call(fetchPropertyData, action.payload.link);
    yield put(fetchPropertyDataSuccess(data.data));
}

export function* watchPropertySaga() {
    yield all([
        takeEvery(PropertiesActionTypeKey.GET_PROPERTIES_DATA, saga(propertyDataSaga))
    ]);
}