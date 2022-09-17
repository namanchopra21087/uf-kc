import { LocalDateTime } from "@js-joda/core";
import { optional } from "@unifocus/js-utils";
import { serializable } from "serializr";

export class ReservationHistoryListModel {

    @optional
    @serializable
    PmsToKsvEventName: string | null;

    @serializable
    PmsToKsvEventId: number | null;

    @optional
    @serializable
    PmsToKsvEventDetails: string | null;

    @optional
    @serializable
    PmsToKsvTimeStamp: LocalDateTime | null;

    @optional
    @serializable
    PmsToKsvStatus: string | null;

    @optional
    @serializable
    PmsToKsvErrorText: string | null;

    @optional
    @serializable
    PmsToKsvUpdatetTime: LocalDateTime | null;

    @optional
    @serializable
    KsvToHkSyncKeyId: number | null;

    @optional
    @serializable
    KsvToHkKsvReservationId: number | null;

    @optional
    @serializable
    KsvToHkSyncAction: number | null;

    @optional
    @serializable
    KsvToHkCreatedOn: LocalDateTime | null;

    @optional
    @serializable
    KsvToHkProcessedOn: LocalDateTime | null;

    @optional
    @serializable
    KsvToHkStatus: string | null;

    @optional
    @serializable
    KsvToHkErrorText: string | null;

    @optional
    @serializable
    KsvToHkUpdateTime: LocalDateTime | null;


    constructor(PmsToKsvEventName: string | null,
        PmsToKsvEventId: number | null,
        PmsToKsvEventDetails: string | null,
        PmsToKsvTimeStamp: LocalDateTime | null,
        PmsToKsvStatus: string | null,
        PmsToKsvErrorText: string | null,
        PmsToKsvUpdatetTime: LocalDateTime | null,
        KsvToHkSyncKeyId: number | null,
        KsvToHkKsvReservationId: number | null,
        KsvToHkSyncAction: number | null,
        KsvToHkCreatedOn: LocalDateTime | null,
        KsvToHkProcessedOn: LocalDateTime | null,
        KsvToHkStatus: string | null,
        KsvToHkErrorText: string | null,
        KsvToHkUpdateTime: LocalDateTime | null) {
        this.PmsToKsvEventName = PmsToKsvEventName;
        this.PmsToKsvEventId = PmsToKsvEventId;
        this.PmsToKsvEventDetails = PmsToKsvEventDetails;
        this.PmsToKsvTimeStamp = PmsToKsvTimeStamp;
        this.PmsToKsvStatus = PmsToKsvStatus;
        this.PmsToKsvErrorText = PmsToKsvErrorText;
        this.PmsToKsvUpdatetTime = PmsToKsvUpdatetTime;
        this.KsvToHkSyncKeyId = KsvToHkSyncKeyId;
        this.KsvToHkKsvReservationId = KsvToHkKsvReservationId;
        this.KsvToHkSyncAction = KsvToHkSyncAction;
        this.KsvToHkCreatedOn = KsvToHkCreatedOn;
        this.KsvToHkProcessedOn = KsvToHkProcessedOn;
        this.KsvToHkStatus = KsvToHkStatus;
        this.KsvToHkErrorText = KsvToHkErrorText;
        this.KsvToHkUpdateTime = KsvToHkUpdateTime;
    }
}