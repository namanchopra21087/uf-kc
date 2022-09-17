import { createActionWithPayload } from "@unifocus/react-application";
import { RoomDetailsInfoModel } from "../../adapters/models/event-model/room-status-model/RoomDetailsInfoModel";
import ProLocDetailsActionTypeKey from "./ProLocDetailsActionTypeKey";
import { ReservationDetailsInfoModel } from "../../adapters/models/event-model/reservation-history-model/ReservationDetailsInfoModel";

//tslint:disable

//room-status-data
export const fetchProLocDetailsData = (link: string) => {
    return createActionWithPayload(ProLocDetailsActionTypeKey.GET_PRO_LOC_DETAILS_DATA, {link});
};

export type FetchProLocDetailsDataAction = ReturnType<typeof fetchProLocDetailsData>;

export const fetchProLocDetailsDataSuccess = (roomData: RoomDetailsInfoModel) => {
    console.log(roomData, "data");
    return createActionWithPayload(ProLocDetailsActionTypeKey.GET_PRO_LOC_DETAILS_DATA_SUCCESS, {roomData});
};

export type FetchProLocDetailsDataSuccessAction = ReturnType<typeof fetchProLocDetailsDataSuccess>;

//reservation-history-data

export const fetchProLocReservationHistoryDetailsData = (link: string) => {
    return createActionWithPayload(ProLocDetailsActionTypeKey.GET_PRO_LOC_RESERVATION_DATA, {link});
}

export type FetchProLocReservationHistoryDetailsDataAction = ReturnType<typeof fetchProLocReservationHistoryDetailsData>;


export const fetchProLocReservationHistoryDetailsDataSuccess = (reservationData: ReservationDetailsInfoModel) => {
    console.log(reservationData, "data");
    return createActionWithPayload(ProLocDetailsActionTypeKey.GET_PRO_LOC_RESERVATION_DATA_SUCCESS, {reservationData});
};

export type FetchProLocReservationHistoryDetailsDataSuccessAction = ReturnType<typeof fetchProLocReservationHistoryDetailsDataSuccess>;


export const getModalVisiableStatusWithData = (flag: boolean, data: string | null | undefined) => {
    return createActionWithPayload(ProLocDetailsActionTypeKey.FILTER_MODAL_VISIBLE_STATUS, {flag, data});
};

export type GetModalVisiableStatusAction = ReturnType<typeof getModalVisiableStatusWithData>;