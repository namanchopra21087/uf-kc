import { LocalDateTime } from '@js-joda/core';
import { serializable, list, object } from 'serializr';
import { ReservationHistoryListModel } from './ReservationHistoryListModel';

export class ReservationDetailsInfoModel {

    @serializable
    ReservationKsvRoomNumber: number;

    @serializable
    ReservationKsvGuestName: string;

    @serializable
    ReservationKsvReservationStatus: string;

    @serializable
    ReservationHkGuestName: string;

    @serializable
    ReservationHkReservationStatus: string;

    @serializable
    ReservationPmsGuestId: number;

    @serializable
    ReservationPmsReservationHd: LocalDateTime | null;

    @serializable
    ReservationLastUpdateTime: LocalDateTime | null;

    @serializable(list(object(ReservationHistoryListModel)))
    reservationHistory: ReservationHistoryListModel[];

    constructor(ReservationKsvRoomNumber: number,
        ReservationKsvGuestName: string,
        ReservationKsvReservationStatus: string,
        ReservationHkGuestName: string,
        ReservationHkReservationStatus: string,
        ReservationPmsGuestId: number,
        ReservationPmsReservationHd: LocalDateTime | null,
        ReservationLastUpdateTime: LocalDateTime | null,
        reservationHistory: ReservationHistoryListModel[]) {
        this.ReservationKsvRoomNumber = ReservationKsvRoomNumber;
        this.ReservationKsvGuestName = ReservationKsvGuestName;
        this.ReservationKsvReservationStatus = ReservationKsvReservationStatus;
        this.ReservationHkGuestName = ReservationHkGuestName;
        this.ReservationHkReservationStatus = ReservationHkReservationStatus;
        this.ReservationPmsGuestId = ReservationPmsGuestId;
        this.ReservationPmsReservationHd = ReservationPmsReservationHd;
        this.ReservationLastUpdateTime = ReservationLastUpdateTime;
        this.reservationHistory = reservationHistory;
    }
}