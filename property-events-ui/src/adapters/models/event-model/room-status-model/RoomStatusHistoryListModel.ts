import { LocalDateTime } from "@js-joda/core";
import { optional } from "@unifocus/js-utils";
import { serializable } from "serializr";

export class RoomStatusHistoryListModel {

    @optional
    @serializable
    PmsToKsvEventName: string | null;

    @optional
    @serializable
    PmsToKsvEventDate: string | null;

    @optional
    @serializable
    PmsToKsvReceivedTime: LocalDateTime | null;

    @optional
    @serializable
    PmsToKsvProcessedTime: LocalDateTime | null;

    @optional
    @serializable
    PmsToKsvStatus: string | null;

    @optional
    @serializable
    PmsToKsvErrorText: string | null;

    @optional
    @serializable
    PmsToKsvKSVUpdateTime: LocalDateTime | null;

    @optional
    @serializable
    PmsToKsvSyncKeyId: number | null;

    @optional
    @serializable
    PmsToKsvLocationId: number | null;

    @optional
    @serializable
    PmsToKsvSyncAction: number | null;

    @optional
    @serializable
    PmsToKsvCreatedOn: LocalDateTime | null;

    @optional
    @serializable
    PmsToKsvProcessedOn: LocalDateTime | null;

    @optional
    @serializable
    PmsToKsvHKUpdateTime: LocalDateTime | null;

    @optional
    @serializable
    KsvToPmsEventName: string | null;

    @optional
    @serializable
    KsvToPmsEventDate: string | null;

    
    @optional
    @serializable
    KsvToPmsReceivedTime: LocalDateTime | null;

    @optional
    @serializable
    KsvToPmsProcessedTime: LocalDateTime | null;

    @optional
    @serializable
    KsvToPmsStatus: string | null;

    @optional
    @serializable
    KsvToPmsErrorText: string | null;

    @optional
    @serializable
    KsvToPmsUpdateTime: LocalDateTime | null;

    constructor(PmsToKsvEventName: string | null,
        PmsToKsvEventDate: string | null,
        PmsToKsvReceivedTime: LocalDateTime | null,
        PmsToKsvProcessedTime: LocalDateTime | null,
        PmsToKsvStatus: string | null,
        PmsToKsvErrorText: string | null,
        PmsToKsvKSVUpdateTime: LocalDateTime | null,
        PmsToKsvSyncKeyId: number | null,
        PmsToKsvLocationId: number | null,
        PmsToKsvSyncAction: number | null,
        PmsToKsvCreatedOn: LocalDateTime | null,
        PmsToKsvProcessedOn: LocalDateTime | null,
        PmsToKsvHKUpdateTime: LocalDateTime | null,
        KsvToPmsEventName: string | null,
        KsvToPmsEventDate: string | null,
        KsvToPmsReceivedTime: LocalDateTime | null,
        KsvToPmsProcessedTime: LocalDateTime | null,
        KsvToPmsStatus: string | null,
        KsvToPmsErrorText: string | null,
        KsvToPmsUpdateTime: LocalDateTime | null) {
        this.PmsToKsvEventName = PmsToKsvEventName;
        this.PmsToKsvEventDate = PmsToKsvEventDate;
        this.PmsToKsvReceivedTime = PmsToKsvReceivedTime;
        this.PmsToKsvProcessedTime = PmsToKsvProcessedTime;
        this.PmsToKsvStatus = PmsToKsvStatus;
        this.PmsToKsvErrorText = PmsToKsvErrorText;
        this.PmsToKsvKSVUpdateTime = PmsToKsvKSVUpdateTime;
        this.PmsToKsvSyncKeyId = PmsToKsvSyncKeyId;
        this.PmsToKsvLocationId = PmsToKsvLocationId;
        this.PmsToKsvSyncAction = PmsToKsvSyncAction;
        this.PmsToKsvCreatedOn = PmsToKsvCreatedOn;
        this.PmsToKsvProcessedOn = PmsToKsvProcessedOn;
        this.PmsToKsvHKUpdateTime = PmsToKsvHKUpdateTime;
        this.KsvToPmsEventName = KsvToPmsEventName;
        this.KsvToPmsEventDate = KsvToPmsEventDate;
        this.KsvToPmsReceivedTime = KsvToPmsReceivedTime;
        this.KsvToPmsProcessedTime = KsvToPmsProcessedTime;
        this.KsvToPmsStatus = KsvToPmsStatus;
        this.KsvToPmsErrorText = KsvToPmsErrorText;
        this.KsvToPmsUpdateTime = KsvToPmsUpdateTime;
    }
}