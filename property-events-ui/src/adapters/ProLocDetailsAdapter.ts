import { HalIO } from "@unifocus/js-utils";
import { ReservationHistoryMockData } from "./mock-Data/ReservationHistoryMockData";
import { RoomStatusMockData } from "./mock-Data/RoomStatusMockData";

//tslint:disable
const delay = (ms: any) => new Promise(resolve => setTimeout(resolve, ms));
export const fetchProLocDetailsRoomData = async (link: string) => {
    // const io = new HalIO(PropertyModel);
    // return  io.get(link).then((response) => {
    //     return response.data;
    // });
    await delay(5000);
    return RoomStatusMockData;
}
// export const fetchProLocDetailsData = (link: string) => {
//     const io = new HalIO(EventDetailsModel);
//     return  io.get(link).then((response) => {
//         return response.data;
//     });
// }

export const fetchProLocReservationDetailsData = async (link: string) => {
    // const io = new HalIO(EventDetailsModel);
    // return io.get(link).then((response) => {
    //     return response.data;
    // });
    await delay(5000);
    return ReservationHistoryMockData;
}