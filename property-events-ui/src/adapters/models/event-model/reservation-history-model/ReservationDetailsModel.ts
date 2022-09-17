import {serializable} from 'serializr';
import { ReservationDetailsInfoModel } from './ReservationDetailsInfoModel';

export class ReservationDetailsModel {
    
    @serializable
    data: ReservationDetailsInfoModel;

    constructor(data: ReservationDetailsInfoModel) {
        this.data = data;
    }
}