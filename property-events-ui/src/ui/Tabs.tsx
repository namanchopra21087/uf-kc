import React from "react";
import { Tabs, TabPane } from "@unifocus/react-components";
import { RoomStatusHistory } from "./room-history-status/RoomStatusHistory";
import { ReservationHistory } from "./reservation-history/ReservationHistory";
import { useSelector } from "react-redux";
import { AppState } from "../config/StoreProvider";


interface LocalProps { }
//tslint:disable
type Props = LocalProps;

export const TabsSection = (props: Props) => {
    const proLocationEventsData = useSelector((state: AppState) => state.proLocDetailsModelReducer.proLocDetailsData);

    const onTabChange = () => {
        console.log('tab');
    }

    console.log("proLocationEventsData =", proLocationEventsData);
    return (
        <Tabs defaultActiveKey="1" onChange={onTabChange} height="100%">
            <TabPane tab="Room Status History" key="1">
                <RoomStatusHistory />
            </TabPane>
            <TabPane tab="Reservation history" key="2">
                <ReservationHistory />
            </TabPane>
        </Tabs>
    );
};
