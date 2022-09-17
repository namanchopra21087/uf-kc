import MainModelActionTypeKey from "./MainModelActionTypeKey";
import {MainModel} from '../../adapters/models/main-model/MainModel';
import { createAction, createActionWithPayload } from "@unifocus/react-application";

//Getting Root URI
export const fetchSetup = () => {
    return createAction(MainModelActionTypeKey.LOAD_INITIAL_MAIN_MODEL);
};
export type FetchSetupAction = ReturnType<typeof fetchSetup>;

export const mainModelLoadSuccess = (mainModel: MainModel) =>  createActionWithPayload(MainModelActionTypeKey.MAIN_MODEL_LOAD_SUCCESS,
                                                                                       {mainModel: mainModel});
export type MainModelLoadSuccessAction = ReturnType<typeof mainModelLoadSuccess>;