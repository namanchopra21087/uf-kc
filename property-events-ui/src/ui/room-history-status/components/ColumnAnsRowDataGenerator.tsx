import { LocalDateTime } from "@js-joda/core";
import { Link } from "@unifocus/react-components";
import { ElementCell, IntegerCell, LocalDateTimeCell, StringCell, TypedValueGetterParams } from "@unifocus/react-uf-grid";
import React, { Dispatch } from "react";
import { RoomStatusHistoryListModel } from "../../../adapters/models/event-model/room-status-model/RoomStatusHistoryListModel";
import { getModalVisiableStatusWithData } from "../../../domain/property-location-details/ProLocDetailsActionCreators";
import { Data, RowData } from "./RowDataInterface";

export const generateData = (roomHistoryData: RoomStatusHistoryListModel[], dispatch: Dispatch<any>) => {
    const handleEventDataClick = (data: string | null | undefined) => {
        console.log("dat", data);
        if (data) {
            dispatch(getModalVisiableStatusWithData(true, data));
        }
    }
    const modifiedDataForAllThreeGrids: Data[] = [
        {
            id: 1,
            eventsFrom: 'PMS',
            eventsTo: 'KSV',
            rowData: roomHistoryData.map(data => {
                return ({
                    pmsToKsvEventName: data.PmsToKsvEventName,
                    pmsToKsvEventData: data.PmsToKsvEventDate,
                    pmsToKsvReceivedTime: data.PmsToKsvReceivedTime,
                    pmsToKsvProcessedTime: data.PmsToKsvProcessedTime,
                    pmsToKsvStatus: data.PmsToKsvStatus,
                    pmsToKsvErrorText: data.PmsToKsvErrorText,
                    pmsToKsvKSVUpdateTime: data.PmsToKsvKSVUpdateTime,
                })
            }),
            columns: [
                StringCell.colDef({
                    headerName: 'Event Name',
                    field: 'pmsToKsvEventName'
                }),
                ElementCell.colDef({
                    headerName: `Event Data`,
                    valueGetter: ElementCell.valueGetter((params: TypedValueGetterParams<RowData>) => {
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
                    headerName: 'Event Received Time',
                    valueGetter: LocalDateTimeCell.valueGetter((params: TypedValueGetterParams<RowData>) => {
                        return params.data.pmsToKsvReceivedTime !== null ? LocalDateTime.parse(`${params.data.pmsToKsvReceivedTime}`) : undefined;
                    }),
                }),
                LocalDateTimeCell.colDef({
                    headerName: 'Processed Time',
                    valueGetter: LocalDateTimeCell.valueGetter((params: TypedValueGetterParams<RowData>) => {
                        return params.data.pmsToKsvProcessedTime !== null ? LocalDateTime.parse(`${params.data.pmsToKsvProcessedTime}`) : undefined;
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
                    valueGetter: LocalDateTimeCell.valueGetter((params: TypedValueGetterParams<RowData>) => {
                        return params.data.pmsToKsvKSVUpdateTime !== null ? LocalDateTime.parse(`${params.data.pmsToKsvKSVUpdateTime}`) : undefined;
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
                    pmsToKsvSyncKeyId: data.PmsToKsvSyncKeyId,
                    pmsToKsvLocationId: data.PmsToKsvLocationId,
                    pmsToKsvSyncAction: data.PmsToKsvSyncAction,
                    pmsToKsvCreatedOn: data.PmsToKsvCreatedOn,
                    pmsToKsvProcessedOn: data.PmsToKsvProcessedOn,
                    pmsToKsvStatus: data.PmsToKsvStatus,
                    pmsToKsvHKUpdateTime: data.PmsToKsvHKUpdateTime,
                })
            }),
            columns: [
                IntegerCell.colDef({
                    headerName: 'SyncKey ID',
                    field: 'pmsToKsvSyncKeyId'
                }),
                IntegerCell.colDef({
                    headerName: 'KSV Location ID',
                    field: 'pmsToKsvLocationId'
                }),
                StringCell.colDef({
                    headerName: 'Sync Action',
                    field: 'pmsToKsvSyncAction'
                }),
                LocalDateTimeCell.colDef({
                    headerName: 'Created On',
                    valueGetter: LocalDateTimeCell.valueGetter((params: TypedValueGetterParams<RowData>) => {
                        return params.data.pmsToKsvCreatedOn !== null ? LocalDateTime.parse(`${params.data.pmsToKsvCreatedOn}`) : undefined;
                    }),
                }),
                LocalDateTimeCell.colDef({
                    headerName: 'Processed On',
                    valueGetter: LocalDateTimeCell.valueGetter((params: TypedValueGetterParams<RowData>) => {
                        return params.data.pmsToKsvProcessedOn !== null ? LocalDateTime.parse(`${params.data.pmsToKsvProcessedOn}`) : undefined;
                    }),
                }),
                StringCell.colDef({
                    headerName: 'Status',
                    field: 'pmsToKsvStatus'
                }),
                LocalDateTimeCell.colDef({
                    headerName: 'HK Update Time',
                    valueGetter: LocalDateTimeCell.valueGetter((params: TypedValueGetterParams<RowData>) => {
                        return params.data.pmsToKsvHKUpdateTime !== null ? LocalDateTime.parse(`${params.data.pmsToKsvHKUpdateTime}`) : undefined;
                    }),
                }),
            ]
        },
        {
            id: 3,
            eventsFrom: 'KSV',
            eventsTo: 'PMS',
            rowData: roomHistoryData.map(data => {
                return ({
                    ksvToPmsEventName: data.KsvToPmsEventName,
                    ksvToPmsEventData: data.KsvToPmsEventDate,
                    ksvToPmsReceivedTime: data.KsvToPmsReceivedTime,
                    ksvToPmsProcessedTime: data.KsvToPmsProcessedTime,
                    ksvToPmsStatus: data.KsvToPmsStatus,
                    ksvToPmsErrorText: data.KsvToPmsErrorText,
                    ksvToPmsKSVUpdateTime: data.KsvToPmsUpdateTime,
                })
            }),
            columns: [
                StringCell.colDef({
                    headerName: 'Event Name',
                    field: 'ksvToPmsEventName'
                }),
                // StringCell.colDef({
                //     headerName: 'Event Data',
                //     field: 'ksvToPmsEventData'
                // }),
                ElementCell.colDef({
                    headerName: `Event Data`,
                    valueGetter: ElementCell.valueGetter((params: TypedValueGetterParams<RowData>) => {
                        console.log("para", params.data);
                        return <Link
                            underline={true}
                            onClick={() => handleEventDataClick(params.data.ksvToPmsEventData)}
                        >
                            {`${params.data.ksvToPmsEventData}`}
                        </Link>;
                    }),
                    // minWidth: 200,
                    // getQuickFilterText: (params: GetQuickFilterTextParams) => {
                    //     return params.data.ksvToPmsEventDate;
                    // },
                    tooltipField: 'ksvToPmsEventData',
                    sortable: true,
                }),
                LocalDateTimeCell.colDef({
                    headerName: 'Event Received Time',
                    valueGetter: LocalDateTimeCell.valueGetter((params: TypedValueGetterParams<RowData>) => {
                        return params.data.ksvToPmsReceivedTime !== null ? LocalDateTime.parse(`${params.data.ksvToPmsReceivedTime}`) : undefined;
                    }),
                }),
                LocalDateTimeCell.colDef({
                    headerName: 'Processed Time',
                    valueGetter: LocalDateTimeCell.valueGetter((params: TypedValueGetterParams<RowData>) => {
                        return params.data.ksvToPmsProcessedTime !== null ? LocalDateTime.parse(`${params.data.ksvToPmsProcessedTime}`) : undefined;
                    }),
                }),
                StringCell.colDef({
                    headerName: 'Status',
                    field: 'ksvToPmsStatus'
                }),
                StringCell.colDef({
                    headerName: 'Error Text',
                    field: 'ksvToPmsErrorText'
                }),
                LocalDateTimeCell.colDef({
                    headerName: 'KSV Update Time',
                    valueGetter: LocalDateTimeCell.valueGetter((params: TypedValueGetterParams<RowData>) => {
                        return params.data.ksvToPmsKSVUpdateTime !== null ? LocalDateTime.parse(`${params.data.ksvToPmsKSVUpdateTime}`) : undefined;
                    }),
                }),
            ]
        }
    ];
    console.log("modifiedDataForAllThreeGrids", modifiedDataForAllThreeGrids);
    return modifiedDataForAllThreeGrids;
}