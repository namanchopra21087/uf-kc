import { combineReducers, Store } from 'redux';
import { createStandardStore } from '@unifocus/react-application';
import { SagaMiddleware } from 'redux-saga';
import { watchMainModel } from './../domain/main-model/MainModelSagas';
import { default as mainModelReducer, MainModelState } from './../domain/main-model/MainModelReducer';
import { watchPropertySaga } from './../domain/property/PropertySagas';
import { default as propertyModelReducer, PropertiesDataState } from './../domain/property/PropertyReducer';
import { watchLocationSaga } from './../domain/location/LocationSagas';
import { default as locationModelReducer, LocationsDataState } from './../domain/location/LocationReducer';
import { watchProLocDetailsSaga } from './../domain/property-location-details/ProLocDetailsSagas';
import { default as proLocDetailsModelReducer, ProLocDetailsDataState } from './../domain/property-location-details/ProLocDetailsReducer'; 

export interface AppState {
   mainModelReducer: MainModelState;
   propertyModelReducer: PropertiesDataState;
   locationModelReducer: LocationsDataState;
   proLocDetailsModelReducer: ProLocDetailsDataState;
}

export const storeProvider = (route: string): Store<AppState> => {
   const reducer = combineReducers({
      mainModelReducer,
      propertyModelReducer,
      locationModelReducer,
      proLocDetailsModelReducer
   });
   const configureSagas = (sagaMiddleware: SagaMiddleware<Store<AppState>>) => {
      // Once you've defined a root saga, import it and uncomment the following line.
      // sagaMiddleware.run(rootSaga);
      sagaMiddleware.run(watchMainModel);
      sagaMiddleware.run(watchPropertySaga);
      sagaMiddleware.run(watchLocationSaga);
      sagaMiddleware.run(watchProLocDetailsSaga);
   };

   return createStandardStore(reducer, configureSagas);
};
