import React, { useEffect, useState } from "react";
import { IntegerCell, StringCell, UfGrid } from "@unifocus/react-uf-grid";
import { RoomDetailsInfoModel } from "../../../adapters/models/event-model/room-status-model/RoomDetailsInfoModel";
import { useSelector } from "react-redux";
import { AppState } from "../../../config/StoreProvider";

interface LocalProps {
    // proLocationEventsRoomData: RoomDetailsInfoModel;
 }
//tslint:disable
type Props = LocalProps;

export const RoomHistoryInfoDetails = (props: Props) => {

    const proLocationEventsRoomData = useSelector((state: AppState) => state.proLocDetailsModelReducer.proLocDetailsData);
    const [rowData, setRowData] = useState<RoomDetailsInfoModel[]>();

    useEffect(() => {
        if (proLocationEventsRoomData) {
            setRowData([proLocationEventsRoomData]);
        }
    }, [proLocationEventsRoomData]);

    const columnDefs = [
        IntegerCell.colDef({
            headerName: 'KSV Room Number',
            field: 'KSVRoomNumber'
        }),
        IntegerCell.colDef({
            headerName: 'PMS Room Number',
            field: 'PMSRoomNumber'
        }),
        IntegerCell.colDef({
            headerName: 'HK Room Number',
            field: 'HKRoomNumber'
        }),
        IntegerCell.colDef({
            headerName: 'KSV Location ID',
            field: 'KSVLocationId'
        }),
        IntegerCell.colDef({
            headerName: 'HK Location ID',
            field: 'HKLocationId'
        }),
        StringCell.colDef({
            headerName: 'KSV Room Status',
            field: 'KSVRoomStatus'
        }),
        StringCell.colDef({
            headerName: 'HK Room Status',
            field: 'HKRoomStatus'
        })]
        console.log("da", rowData, proLocationEventsRoomData);
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
