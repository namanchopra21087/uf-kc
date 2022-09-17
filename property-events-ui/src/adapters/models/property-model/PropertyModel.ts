import { LocalDateTime } from '@js-joda/core';
import {serializable, list, object} from 'serializr';
import { PropertiesListModel } from './PropertiesListModel';
// import {PropertyDTOListModel} from './RefactorModel/PropertyDTOListModel';

export class PropertyModel {

    @serializable(list(object(PropertiesListModel)))
    data: PropertiesListModel[];

    constructor(data: PropertiesListModel[]) {
        this.data = data;
    }
}