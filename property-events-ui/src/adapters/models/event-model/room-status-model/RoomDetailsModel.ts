import {serializable} from 'serializr';
import { RoomDetailsInfoModel } from './RoomDetailsInfoModel';

export class RoomDetailsModel {
    
    @serializable
    data: RoomDetailsInfoModel;

    constructor(data: RoomDetailsInfoModel) {
        this.data = data;
    }
}