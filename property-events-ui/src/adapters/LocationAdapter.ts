// import { HalIO } from "@unifocus/js-utils";
import { locationMockData } from "./mock-Data/LocationMockData";
// import { LocationModel } from "./models/location-model/LocationModel";

//tslint:disable
const delay= (ms: any) => new Promise(resolve => setTimeout(resolve, ms));
export const fetchLocationData = async (link: string) => {
    // const io = new HalIO(PropertyModel);
    // return  io.get(link).then((response) => {
    //     return response.data;
    // });
    await delay(5000);
    return locationMockData;
}
// export const fetchLocationData = (link: string) => {
//     const io = new HalIO(LocationModel);
//     return  io.get(link).then((response) => {
//         return response.data;
//     });
// }