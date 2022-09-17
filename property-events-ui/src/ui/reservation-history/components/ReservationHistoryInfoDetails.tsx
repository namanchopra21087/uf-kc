import React, { useEffect, useState } from "react";
import { IntegerCell, LocalDateTimeCell, StringCell, TypedValueGetterParams, UfGrid } from "@unifocus/react-uf-grid";
import { useSelector } from "react-redux";
import { AppState } from "../../../config/StoreProvider";
import { LocalDateTime } from "@js-joda/core";
import { ReservationDetailsInfoModel } from "../../../adapters/models/event-model/reservation-history-model/ReservationDetailsInfoModel";

interface LocalProps { }
//tslint:disable
type Props = LocalProps;

export const ReservationHistoryInfoDetails = (props: Props) => {

    const proLocationEventsReserveData = useSelector((state: AppState) => state.proLocDetailsModelReducer.proLocReservationDetailsData);
    const [rowData, setRowData] = useState<ReservationDetailsInfoModel[]>();

    useEffect(() => {
        if (proLocationEventsReserveData) {
            setRowData([proLocationEventsReserveData]);
        }
    }, [proLocationEventsReserveData])
    const columnDefs = [
        IntegerCell.colDef({
            headerName: 'KSV Room Number',
            field: 'ReservationKsvRoomNumber'
        }),
        StringCell.colDef({
            headerName: 'KSV Guest Name',
            field: 'ReservationKsvGuestName'
        }),
        StringCell.colDef({
            headerName: 'KSV Reservation Status',
            field: 'ReservationKsvReservationStatus'
        }),
        StringCell.colDef({
            headerName: 'HK Guest Name',
            field: 'ReservationHkGuestName'
        }),
        StringCell.colDef({
            headerName: 'HK Reservation Status',
            field: 'ReservationHkReservationStatus'
        }),
        IntegerCell.colDef({
            headerName: 'PMS Guest ID',
            field: 'ReservationKsvRoomNumber'
        }),
        LocalDateTimeCell.colDef({
            headerName: 'PMS Reservation HD',
            valueGetter: LocalDateTimeCell.valueGetter((params: TypedValueGetterParams<ReservationDetailsInfoModel>) => {
                return params.data.ReservationPmsReservationHd !== null ? LocalDateTime.parse(`${params.data.ReservationPmsReservationHd}`) : undefined;
            }),
        }),
        LocalDateTimeCell.colDef({
            headerName: 'Last Update Time',
            valueGetter: LocalDateTimeCell.valueGetter((params: TypedValueGetterParams<ReservationDetailsInfoModel>) => {
                return params.data.ReservationLastUpdateTime !== null ? LocalDateTime.parse(`${params.data.ReservationLastUpdateTime}`) : undefined;
            }),
        }),
    ]
        console.log("dat", rowData);
    return (
        <UfGrid
            grid={{
                rowData: rowData,
                columnDefs: columnDefs,
                onFirstDataRendered: params => {
                    params.api.sizeColumnsToFit();
                }
            }} gridContainer={{
                width: '100%',
                height: '107px'
            }} />
    );
};
