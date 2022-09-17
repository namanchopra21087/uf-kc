import { updateObject } from "@unifocus/js-utils";
import { functionalReducer, UniFocusActionWithPayload } from "@unifocus/react-application";
import { LocationListModel } from "../../adapters/models/location-model/LocationListModel";
import { FetchLocationDataSuccessAction } from "./LocationActionCreators";
import LocationActionTypeKey from "./LocationActionTypeKey";

//tslint:disable
export interface LocationsDataState {
    locationData?: LocationListModel[]; 
}
const initialState: LocationsDataState = {
    
};

export const updateLocations = (state: LocationsDataState, action: FetchLocationDataSuccessAction) => {
    return updateObject(state, {
        locationData: action.payload.data
    });
};

export default functionalReducer<LocationsDataState, UniFocusActionWithPayload<any>>(initialState, {
 [LocationActionTypeKey.GET_LOCATIONS_DATA_SUCCESS]: updateLocations,
});