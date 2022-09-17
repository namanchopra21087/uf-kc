import { LocalDateTime } from "@js-joda/core";
import { ColDef, ColGroupDef } from "ag-grid-community";

export interface ReservationRowData {
    pmsToKsvEventName?: string | null;
    pmsToKsvEventId?: number | null;
    pmsToKsvEventData?: string | null;
    pmsToKsvTimeStamp?: LocalDateTime | null;
    pmsToKsvStatus?: string | null;
    pmsToKsvErrorText?: string | null;
    pmsToKsvUpdatetTime?: LocalDateTime | null;
    ksvToHkSyncKeyId?: number | null;
    ksvToHkKsvReservationId?: number | null;
    ksvToHkSyncAction?: number | null;
    ksvToHkCreatedOn?: LocalDateTime | null;
    ksvToHkProcessedOn?: LocalDateTime | null;
    ksvToHkStatus?: string | null;
    ksvToHkErrorText?: string | null;
    ksvToHkUpdateTime?: LocalDateTime | null;
}
export interface ReservationData {
    id: number;
    eventsFrom: string;
    eventsTo: string;
    rowData: ReservationRowData[];
    columns: (ColDef | ColGroupDef)[] | null | undefined;
}