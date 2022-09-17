import { createActionWithPayload } from "@unifocus/react-application";
import { LocationListModel } from "../../adapters/models/location-model/LocationListModel";
import LocationActionTypeKey from "./LocationActionTypeKey";

//tslint:disable
export const fetchLocationData = (link: string) => {
    return createActionWithPayload(LocationActionTypeKey.GET_LOCATIONS_DATA, {link});
};

export type FetchLocationDataAction = ReturnType<typeof fetchLocationData>;

export const fetchLocationDataSuccess = (data: LocationListModel[]) => {
    console.log(data, "data");
    return createActionWithPayload(LocationActionTypeKey.GET_LOCATIONS_DATA_SUCCESS, {data});
};

export type FetchLocationDataSuccessAction = ReturnType<typeof fetchLocationDataSuccess>;