import React, { useEffect, useState } from "react";
import { LocalDateTime } from "@js-joda/core";
import { Collapse, CollapsePanel, ContentPanel, Empty, Link, Modal, VerticalPanel } from "@unifocus/react-components";
import { ElementCell, IntegerCell, LocalDateTimeCell, StringCell, TypedValueGetterParams, UfGrid } from "@unifocus/react-uf-grid";
import { ColDef, ColGroupDef, GetQuickFilterTextParams } from "ag-grid-community";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../config/StoreProvider";
import { ReservationHistoryInfoDetails } from "./components/ReservationHistoryInfoDetails";
import { ReservationHistoryListModel } from "../../adapters/models/event-model/reservation-history-model/ReservationHistoryListModel";
import { EventDataDetailsModal } from "../shared/EventDataDetailsModal";
import { formatXml, parseXml } from "@unifocus/js-utils";
import { getModalVisiableStatusWithData } from "../../domain/property-location-details/ProLocDetailsActionCreators";
import { generateReservationData } from "./components/ReservationColumnAndDataGenerator";


//tslint:disable
interface RowData {
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
interface Data {
    id: number;
    eventsFrom: string;
    eventsTo: string;
    rowData: RowData[];
    columns: (ColDef | ColGroupDef)[] | null | undefined;
}
interface LocalProps { }
type Props = LocalProps;


export const ReservationHistory = (props: Props) => {
    const dispatch = useDispatch();
    const proLocationEventsReservationData = useSelector((state: AppState) => state.proLocDetailsModelReducer.proLocReservationDetailsData);
    const showEventDataModal = useSelector((state: AppState) => state.proLocDetailsModelReducer.visible);
    const dataToShowInModal = useSelector((state: AppState) => state.proLocDetailsModelReducer.data);
    const [gridData, setGridData] = useState<Data[]>();
    // const [showEventDataModal, setShowEventDataModal] = useState(false);
    // const [dataToShowInModal, setDataToShowInModal] = useState<string>('');

    useEffect(() => {
        console.log("event", proLocationEventsReservationData);
        if (proLocationEventsReservationData && proLocationEventsReservationData && proLocationEventsReservationData.reservationHistory && proLocationEventsReservationData.reservationHistory.length > 0) {
            console.log("proLocationEventsReservationData.data.roomStatusHistory", proLocationEventsReservationData.reservationHistory);
            // generateData(proLocationEventsReservationData.reservationHistory);
            const modifiedDataForAllThreeGrids = generateReservationData(proLocationEventsReservationData.reservationHistory, dispatch);
            setGridData(modifiedDataForAllThreeGrids)
        }
    }, [proLocationEventsReservationData]);

    // const handleEventDataClick = (data: string | null | undefined) => {
    //     console.log("dat", data);
    //     setShowEventDataModal(true);
    //     if (data) {
    //         setDataToShowInModal(data);
    //     }
    // }

    const handleCancel = () => {
        dispatch(getModalVisiableStatusWithData(false, null))
    }

    // const generateData = (roomHistoryData: ReservationHistoryListModel[]) => {
    //     const modifiedDataForAllThreeGrids: Data[] = [
    //         {
    //             id: 1,
    //             eventsFrom: 'PMS',
    //             eventsTo: 'KSV',
    //             rowData: roomHistoryData.map(data => {
    //                 return ({
    //                     pmsToKsvEventName: data.PmsToKsvEventName,
    //                     pmsToKsvEventId: data.PmsToKsvEventId,
    //                     pmsToKsvEventData: data.PmsToKsvEventDetails,
    //                     pmsToKsvTimeStamp: data.PmsToKsvTimeStamp,
    //                     pmsToKsvStatus: data.PmsToKsvStatus,
    //                     pmsToKsvErrorText: data.PmsToKsvErrorText,
    //                     pmsToKsvUpdatetTime: data.PmsToKsvUpdatetTime,
    //                 })
    //             }),
    //             columns: [
    //                 StringCell.colDef({
    //                     headerName: 'Event Name',
    //                     field: 'pmsToKsvEventName'
    //                 }),
    //                 IntegerCell.colDef({
    //                     headerName: 'Be Event ID',
    //                     field: 'pmsToKsvEventId'
    //                 }),
    //                 ElementCell.colDef({
    //                     headerName: `Event Data`,
    //                     valueGetter: ElementCell.valueGetter((params: TypedValueGetterParams<RowData>) => {
    //                         console.log("para", params.data);
    //                         return <Link
    //                             underline={true}
    //                             onClick={() => handleEventDataClick(params.data.pmsToKsvEventData)}
    //                         >
    //                             {`${params.data.pmsToKsvEventData}`}
    //                         </Link>;
    //                     }),
    //                     // minWidth: 200,
    //                     // getQuickFilterText: (params: GetQuickFilterTextParams) => {
    //                     //     return params.data.ksvToPmsEventDate;
    //                     // },
    //                     tooltipField: 'pmsToKsvEventData',
    //                     sortable: true,
    //                 }),
    //                 LocalDateTimeCell.colDef({
    //                     headerName: 'Time Stamp',
    //                     valueGetter: LocalDateTimeCell.valueGetter((params: TypedValueGetterParams<RowData>) => {
    //                         return params.data.pmsToKsvTimeStamp !== null ? LocalDateTime.parse(`${params.data.pmsToKsvTimeStamp}`) : undefined;
    //                     }),
    //                 }),
    //                 StringCell.colDef({
    //                     headerName: 'Status',
    //                     field: 'pmsToKsvStatus'
    //                 }),
    //                 StringCell.colDef({
    //                     headerName: 'Error Text',
    //                     field: 'pmsToKsvErrorText'
    //                 }),
    //                 LocalDateTimeCell.colDef({
    //                     headerName: 'KSV Update Time',
    //                     valueGetter: LocalDateTimeCell.valueGetter((params: TypedValueGetterParams<RowData>) => {
    //                         return params.data.pmsToKsvUpdatetTime !== null ? LocalDateTime.parse(`${params.data.pmsToKsvUpdatetTime}`) : undefined;
    //                     }),
    //                 }),
    //             ]
    //         },
    //         {
    //             id: 2,
    //             eventsFrom: 'KSV',
    //             eventsTo: 'HK',
    //             rowData: roomHistoryData.map(data => {
    //                 return ({
    //                     ksvToHkSyncKeyId: data.KsvToHkSyncKeyId,
    //                     ksvToHkKsvReservationId: data.KsvToHkKsvReservationId,
    //                     ksvToHkSyncAction: data.KsvToHkSyncAction,
    //                     ksvToHkCreatedOn: data.KsvToHkCreatedOn,
    //                     ksvToHkProcessedOn: data.KsvToHkProcessedOn,
    //                     ksvToHkStatus: data.KsvToHkStatus,
    //                     ksvToHkErrorText: data.PmsToKsvErrorText,
    //                     ksvToHkUpdateTime: data.KsvToHkUpdateTime
    //                 })
    //             }),
    //             columns: [
    //                 IntegerCell.colDef({
    //                     headerName: 'SyncKey ID',
    //                     field: 'ksvToHkSyncKeyId'
    //                 }),
    //                 IntegerCell.colDef({
    //                     headerName: 'KSV Reservation ID',
    //                     field: 'ksvToHkKsvReservationId'
    //                 }),
    //                 StringCell.colDef({
    //                     headerName: 'Sync Action',
    //                     field: 'ksvToHkSyncAction'
    //                 }),
    //                 LocalDateTimeCell.colDef({
    //                     headerName: 'Created On',
    //                     valueGetter: LocalDateTimeCell.valueGetter((params: TypedValueGetterParams<RowData>) => {
    //                         return params.data.ksvToHkCreatedOn !== null ? LocalDateTime.parse(`${params.data.ksvToHkCreatedOn}`) : undefined;
    //                     }),
    //                 }),
    //                 LocalDateTimeCell.colDef({
    //                     headerName: 'Processed On',
    //                     valueGetter: LocalDateTimeCell.valueGetter((params: TypedValueGetterParams<RowData>) => {
    //                         return params.data.ksvToHkProcessedOn !== null ? LocalDateTime.parse(`${params.data.ksvToHkProcessedOn}`) : undefined;
    //                     }),
    //                 }),
    //                 StringCell.colDef({
    //                     headerName: 'Status',
    //                     field: 'ksvToHkStatus'
    //                 }),
    //                 StringCell.colDef({
    //                     headerName: 'Error Text',
    //                     field: 'ksvToHkErrorText'
    //                 }),
    //                 LocalDateTimeCell.colDef({
    //                     headerName: 'HK Update Time',
    //                     valueGetter: LocalDateTimeCell.valueGetter((params: TypedValueGetterParams<RowData>) => {
    //                         return params.data.ksvToHkUpdateTime !== null ? LocalDateTime.parse(`${params.data.ksvToHkUpdateTime}`) : undefined;
    //                     }),
    //                 }),
    //             ]
    //         }
    //     ];
    //     console.log("modifiedDataForAllThreeGrids", modifiedDataForAllThreeGrids);
    //     setGridData(modifiedDataForAllThreeGrids)
    // }

    const result = dataToShowInModal && formatXml(parseXml(dataToShowInModal).documentElement, "     ");

    return (
        <ContentPanel scroll={true}>
            <VerticalPanel gap='small' verticalFill={false}>
                {
                    gridData && gridData.length > 0 ? (
                        <>
                            <ReservationHistoryInfoDetails />
                            {
                                gridData.map((data) => {
                                    return (<Collapse key={data.id}>
                                        <CollapsePanel header={`Event From ${data.eventsFrom} > ${data.eventsTo}`} panelId={data.id.toString()}>
                                            <p>{`${data.eventsFrom} > ${data.eventsTo}`}</p>
                                            <UfGrid grid={{
                                                rowData: data.rowData,
                                                columnDefs: data.columns,
                                                onFirstDataRendered: params => {
                                                    params.api.sizeColumnsToFit();
                                                }
                                            }} gridContainer={{
                                                width: '100%',
                                                height: '107px'
                                            }} />
                                        </CollapsePanel>
                                    </Collapse>)
                                })
                            }
                        </>
                    ) : <Empty message={"There is no data to be displayed. Select Property and Location to see the data."} />
                }
            </VerticalPanel>
            <EventDataDetailsModal showEventDataModal={showEventDataModal} result={result!} OnHandleCancel={handleCancel} />
        </ContentPanel>
    );
};
