import { updateObject } from '@unifocus/js-utils';
import { functionalReducer } from '@unifocus/react-application';
import { MainModel } from '../../adapters/models/main-model/MainModel';
import { MainModelLoadSuccessAction } from './MainModelActionCreators';
import MainModelActionTypeKey from './MainModelActionTypeKey';

export interface MainModelState {
   mainModel?: MainModel;
}

const initialState: MainModelState = {

};

const updateMainModel = (state: MainModelState, action: MainModelLoadSuccessAction): MainModelState => {
   return updateObject(state, {
      mainModel: action.payload.mainModel,
   });
};

export default functionalReducer(initialState, {
   [MainModelActionTypeKey.MAIN_MODEL_LOAD_SUCCESS]: updateMainModel,
});