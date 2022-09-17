// import { HalIO } from "@unifocus/js-utils";
import { propertyMockData } from "./mock-Data/PropertyMockData";
// import { PropertyModel } from "./models/property-model/PropertyModel";

//tslint:disable
const delay= (ms: any) => new Promise(resolve => setTimeout(resolve, ms));
export const fetchPropertyData = async (link: string) => {
    // const io = new HalIO(PropertyModel);
    // return  io.get(link).then((response) => {
    //     return response.data;
    // });
    await delay(5000);
    return propertyMockData;

    
}
// export const fetchPropertyData = (link: string) => {
//     const io = new HalIO(PropertyModel);
//     return  io.get(link).then((response) => {
//         return response.data;
//     });
// }