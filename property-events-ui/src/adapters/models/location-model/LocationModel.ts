import {serializable, list, object} from 'serializr';
import { LocationListModel } from './LocationListModel';

export class LocationModel {
    @serializable(list(object(LocationListModel)))
    data: LocationListModel[];

    constructor(data: LocationListModel[]) {
        this.data = data;
    }
}