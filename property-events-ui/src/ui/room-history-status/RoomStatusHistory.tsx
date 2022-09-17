import React, { useEffect, useState } from "react";
import { Collapse, CollapsePanel, ContentPanel, Empty, VerticalPanel } from "@unifocus/react-components";
import { UfGrid } from "@unifocus/react-uf-grid";
import { RoomHistoryInfoDetails } from "./components/RoomHistoryInfoDetails";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../config/StoreProvider";
import { formatXml, parseXml } from "@unifocus/js-utils";
import { EventDataDetailsModal } from "../shared/EventDataDetailsModal";
import { Data } from "./components/RowDataInterface";
import { generateData } from "./components/ColumnAnsRowDataGenerator";
import { getModalVisiableStatusWithData } from "../../domain/property-location-details/ProLocDetailsActionCreators";


//tslint:disable

interface LocalProps { }
type Props = LocalProps;


export const RoomStatusHistory = (props: Props) => {
    const proLocationEventsData = useSelector((state: AppState) => state.proLocDetailsModelReducer.proLocDetailsData);
    const showEventDataModal = useSelector((state: AppState) => state.proLocDetailsModelReducer.visible);
    const dataToShowInModal = useSelector((state: AppState) => state.proLocDetailsModelReducer.data);
    const [gridData, setGridData] = useState<Data[]>();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("event", proLocationEventsData);
        if (proLocationEventsData && proLocationEventsData.roomStatusHistory && proLocationEventsData.roomStatusHistory.length > 0) {
            const modifiedDataForAllThreeGrids = generateData(proLocationEventsData.roomStatusHistory, dispatch);
            setGridData(modifiedDataForAllThreeGrids)
            console.log("inside", proLocationEventsData);
        }
    }, [proLocationEventsData]);

    const handleCancel = () => {
        dispatch(getModalVisiableStatusWithData(false, null))
    }

    console.log("proLocationEventsData", proLocationEventsData);
    const result = dataToShowInModal && formatXml(parseXml(dataToShowInModal).documentElement, "     ");

    return (
        <ContentPanel scroll={true}>
            <VerticalPanel gap='small' verticalFill={false}>
                {
                    gridData && gridData.length > 0  ? (
                        <>
                            <RoomHistoryInfoDetails />
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
            <EventDataDetailsModal showEventDataModal={showEventDataModal} result={result!} OnHandleCancel={handleCancel}/>
        </ContentPanel>
    );
};
