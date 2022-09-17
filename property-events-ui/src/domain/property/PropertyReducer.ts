import { updateObject } from "@unifocus/js-utils";
import { functionalReducer, UniFocusActionWithPayload } from "@unifocus/react-application";
import { PropertiesListModel } from "../../adapters/models/property-model/PropertiesListModel";
import { FetchPropertyDataSuccessAction } from "./PropertyActionCreators";
import PropertiesActionTypeKey from "./PropertyActionTypeKey";
//tslint:disable
export interface PropertiesDataState {
    proprtyData?: PropertiesListModel[] 
}
const initialState: PropertiesDataState = {
    
};

export const updateProperty = (state: PropertiesDataState, action: FetchPropertyDataSuccessAction) => {
    return updateObject(state, {
        proprtyData: action.payload.data
    });
};

export default functionalReducer<PropertiesDataState, UniFocusActionWithPayload<any>>(initialState, {
 [PropertiesActionTypeKey.GET_PROPERTIES_DATA_SUCCESS]: updateProperty,
});