import { LocalDateTime } from "@js-joda/core";
import { Link } from "@unifocus/react-components";
import { ElementCell, IntegerCell, LocalDateTimeCell, StringCell, TypedValueGetterParams } from "@unifocus/react-uf-grid";
import React, { Dispatch } from "react";
import { ReservationHistoryListModel } from "../../../adapters/models/event-model/reservation-history-model/ReservationHistoryListModel";
import { getModalVisiableStatusWithData } from "../../../domain/property-location-details/ProLocDetailsActionCreators";
import { ReservationData, ReservationRowData } from "./ReservationInterface";

export const generateReservationData = (roomHistoryData: ReservationHistoryListModel[], dispatch: Dispatch<any>) => {
    const handleEventDataClick = (data: string | null | undefined) => {
        console.log("dat", data);
        if (data) {
            dispatch(getModalVisiableStatusWithData(true, data));
        }
    }
    const modifiedDataForAllThreeGrids: ReservationData[] = [
        {
            id: 1,
            eventsFrom: 'PMS',
            eventsTo: 'KSV',
            rowData: roomHistoryData.map(data => {
                return ({
                    pmsToKsvEventName: data.PmsToKsvEventName,
                    pmsToKsvEventId: data.PmsToKsvEventId,
                    pmsToKsvEventData: data.PmsToKsvEventDetails,
                    pmsToKsvTimeStamp: data.PmsToKsvTimeStamp,
                    pmsToKsvStatus: data.PmsToKsvStatus,
                    pmsToKsvErrorText: data.PmsToKsvErrorText,
                    pmsToKsvUpdatetTime: data.PmsToKsvUpdatetTime,
                })
            }),
            columns: [
                StringCell.colDef({
                    headerName: 'Event Name',
                    field: 'pmsToKsvEventName'
                }),
                IntegerCell.colDef({
                    headerName: 'Be Event ID',
                    field: 'pmsToKsvEventId'
                }),
                ElementCell.colDef({
                    headerName: `Event Data`,
                    valueGetter: ElementCell.valueGetter((params: TypedValueGetterParams<ReservationRowData>) => {
                        console.log("para", params.data);
                        return <Link
                            underline={true}
                            onClick={() => handleEventDataClick(params.data.pmsToKsvEventData)}
                        >
                            {`${params.data.pmsToKsvEventData}`}
                        </Link>;
                    }),
                    // minWidth: 200,
                    // getQuickFilterText: (params: GetQuickFilterTextParams) => {
                    //     return params.data.ksvToPmsEventDate;
                    // },
                    tooltipField: 'pmsToKsvEventData',
                    sortable: true,
                }),
                LocalDateTimeCell.colDef({
                    headerName: 'Time Stamp',
                    valueGetter: LocalDateTimeCell.valueGetter((params: TypedValueGetterParams<ReservationRowData>) => {
                        return params.data.pmsToKsvTimeStamp !== null ? LocalDateTime.parse(`${params.data.pmsToKsvTimeStamp}`) : undefined;
                    }),
                }),
                StringCell.colDef({
                    headerName: 'Status',
                    field: 'pmsToKsvStatus'
                }),
                StringCell.colDef({
                    headerName: 'Error Text',
                    field: 'pmsToKsvErrorText'
                }),
                LocalDateTimeCell.colDef({
                    headerName: 'KSV Update Time',
                    valueGetter: LocalDateTimeCell.valueGetter((params: TypedValueGetterParams<ReservationRowData>) => {
                        return params.data.pmsToKsvUpdatetTime !== null ? LocalDateTime.parse(`${params.data.pmsToKsvUpdatetTime}`) : undefined;
                    }),
                }),
            ]
        },
        {
            id: 2,
            eventsFrom: 'KSV',
            eventsTo: 'HK',
            rowData: roomHistoryData.map(data => {
                return ({
                    ksvToHkSyncKeyId: data.KsvToHkSyncKeyId,
                    ksvToHkKsvReservationId: data.KsvToHkKsvReservationId,
                    ksvToHkSyncAction: data.KsvToHkSyncAction,
                    ksvToHkCreatedOn: data.KsvToHkCreatedOn,
                    ksvToHkProcessedOn: data.KsvToHkProcessedOn,
                    ksvToHkStatus: data.KsvToHkStatus,
                    ksvToHkErrorText: data.PmsToKsvErrorText,
                    ksvToHkUpdateTime: data.KsvToHkUpdateTime
                })
            }),
            columns: [
                IntegerCell.colDef({
                    headerName: 'SyncKey ID',
                    field: 'ksvToHkSyncKeyId'
                }),
                IntegerCell.colDef({
                    headerName: 'KSV Reservation ID',
                    field: 'ksvToHkKsvReservationId'
                }),
                StringCell.colDef({
                    headerName: 'Sync Action',
                    field: 'ksvToHkSyncAction'
                }),
                LocalDateTimeCell.colDef({
                    headerName: 'Created On',
                    valueGetter: LocalDateTimeCell.valueGetter((params: TypedValueGetterParams<ReservationRowData>) => {
                        return params.data.ksvToHkCreatedOn !== null ? LocalDateTime.parse(`${params.data.ksvToHkCreatedOn}`) : undefined;
                    }),
                }),
                LocalDateTimeCell.colDef({
                    headerName: 'Processed On',
                    valueGetter: LocalDateTimeCell.valueGetter((params: TypedValueGetterParams<ReservationRowData>) => {
                        return params.data.ksvToHkProcessedOn !== null ? LocalDateTime.parse(`${params.data.ksvToHkProcessedOn}`) : undefined;
                    }),
                }),
                StringCell.colDef({
                    headerName: 'Status',
                    field: 'ksvToHkStatus'
                }),
                StringCell.colDef({
                    headerName: 'Error Text',
                    field: 'ksvToHkErrorText'
                }),
                LocalDateTimeCell.colDef({
                    headerName: 'HK Update Time',
                    valueGetter: LocalDateTimeCell.valueGetter((params: TypedValueGetterParams<ReservationRowData>) => {
                        return params.data.ksvToHkUpdateTime !== null ? LocalDateTime.parse(`${params.data.ksvToHkUpdateTime}`) : undefined;
                    }),
                }),
            ]
        }
    ];
    console.log("modifiedDataForAllThreeGrids", modifiedDataForAllThreeGrids);
    return modifiedDataForAllThreeGrids;
}