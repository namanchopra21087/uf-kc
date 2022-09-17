import { updateObject } from "@unifocus/js-utils";
import { functionalReducer, UniFocusActionWithPayload } from "@unifocus/react-application";
import { RoomDetailsInfoModel } from "../../adapters/models/event-model/room-status-model/RoomDetailsInfoModel";
import { FetchProLocDetailsDataSuccessAction, FetchProLocReservationHistoryDetailsDataSuccessAction, GetModalVisiableStatusAction } from "./ProLocDetailsActionCreators";
import ProLocDetailsActionTypeKey from "./ProLocDetailsActionTypeKey";
import { ReservationDetailsInfoModel } from "../../adapters/models/event-model/reservation-history-model/ReservationDetailsInfoModel";
//tslint:disable
export interface ProLocDetailsDataState {
    proLocDetailsData?: RoomDetailsInfoModel;
    visible: boolean;
    data: string | null | undefined;
    proLocReservationDetailsData?: ReservationDetailsInfoModel;
}
const initialState: ProLocDetailsDataState = {
    visible: false,
    data: ''
};

export const updateProLocDetails = (state: ProLocDetailsDataState, action: FetchProLocDetailsDataSuccessAction) => {
    return updateObject(state, {
        proLocDetailsData: action.payload.roomData
    });
};

export const updateVisibleStatus = (state: ProLocDetailsDataState, action: GetModalVisiableStatusAction) => {
    return updateObject(state, {
        visible: action.payload.flag,
        data: action.payload.data
    });
};

export const updateProLocReservationDetails = (state: ProLocDetailsDataState, action: FetchProLocReservationHistoryDetailsDataSuccessAction) => {
    return updateObject(state, {
        proLocReservationDetailsData: action.payload.reservationData
    });
};


export default functionalReducer<ProLocDetailsDataState, UniFocusActionWithPayload<any>>(initialState, {
 [ProLocDetailsActionTypeKey.GET_PRO_LOC_DETAILS_DATA_SUCCESS]: updateProLocDetails,
 [ProLocDetailsActionTypeKey.FILTER_MODAL_VISIBLE_STATUS]: updateVisibleStatus,
 [ProLocDetailsActionTypeKey.GET_PRO_LOC_RESERVATION_DATA_SUCCESS]: updateProLocReservationDetails,
});