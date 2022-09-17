// import { SagaIterator } from "@redux-saga";
import { all, call, put, takeEvery } from "@redux-saga/core/effects";
import { saga } from "@unifocus/react-application";
import { FetchLocationDataAction, fetchLocationDataSuccess } from "./LocationActionCreators";
import LocationActionTypeKey from "./LocationActionTypeKey";
import { LocationModel } from "../../adapters/models/location-model/LocationModel";
import { fetchLocationData } from "../../adapters/LocationAdapter";

//tslint:disable

export function* locationDataSaga(action: FetchLocationDataAction) {
    const data: LocationModel = yield call(fetchLocationData, action.payload.link);
    yield put(fetchLocationDataSuccess(data.data));
}

export function* watchLocationSaga() {
    yield all([
        takeEvery(LocationActionTypeKey.GET_LOCATIONS_DATA, saga(locationDataSaga))
    ]);
}