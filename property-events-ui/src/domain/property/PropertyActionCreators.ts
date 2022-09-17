import { createActionWithPayload } from "@unifocus/react-application";
import { PropertiesListModel } from "../../adapters/models/property-model/PropertiesListModel";
import PropertiesActionTypeKey from "./PropertyActionTypeKey";

//tslint:disable
export const fetchPropertyData = (link: string) => {
    console.log("call property in creator");
    return createActionWithPayload(PropertiesActionTypeKey.GET_PROPERTIES_DATA, {link});
};

export type FetchPropertyDataAction = ReturnType<typeof fetchPropertyData>;

export const fetchPropertyDataSuccess = (data: PropertiesListModel[]) => {
    return createActionWithPayload(PropertiesActionTypeKey.GET_PROPERTIES_DATA_SUCCESS, {data});
};

export type FetchPropertyDataSuccessAction = ReturnType<typeof fetchPropertyDataSuccess>;