// import { SagaIterator } from "@redux-saga";
import { all, call, put, takeEvery } from "@redux-saga/core/effects";
import { saga } from "@unifocus/react-application";
import { FetchProLocDetailsDataAction, fetchProLocDetailsDataSuccess, FetchProLocReservationHistoryDetailsDataAction, fetchProLocReservationHistoryDetailsDataSuccess } from "./ProLocDetailsActionCreators";
import ProLocDetailsActionTypeKey from "./ProLocDetailsActionTypeKey";
import { fetchProLocDetailsRoomData, fetchProLocReservationDetailsData } from "../../adapters/ProLocDetailsAdapter";
import { RoomDetailsModel } from "../../adapters/models/event-model/room-status-model/RoomDetailsModel";
import { ReservationDetailsModel } from "../../adapters/models/event-model/reservation-history-model/ReservationDetailsModel";

//tslint:disable

export function* proLocDetailsDataSaga(action: FetchProLocDetailsDataAction) {
    const roomData: RoomDetailsModel = yield call(fetchProLocDetailsRoomData, action.payload.link);
    console.log("d", roomData);
    yield put(fetchProLocDetailsDataSuccess(roomData.data));
    // yield put(fetchProLocReservationHistoryDetailsData('details'))
}

export function* proLocReservationDetailsDataSaga(action: FetchProLocReservationHistoryDetailsDataAction) {
    const reservationData: ReservationDetailsModel = yield call(fetchProLocReservationDetailsData, action.payload.link);
    console.log("da", reservationData);
    yield put(fetchProLocReservationHistoryDetailsDataSuccess(reservationData.data));
}

export function* watchProLocDetailsSaga() {
    yield all([
        takeEvery(ProLocDetailsActionTypeKey.GET_PRO_LOC_DETAILS_DATA, saga(proLocDetailsDataSaga)),
        takeEvery(ProLocDetailsActionTypeKey.GET_PRO_LOC_RESERVATION_DATA, saga(proLocReservationDetailsDataSaga))
    ]);
}