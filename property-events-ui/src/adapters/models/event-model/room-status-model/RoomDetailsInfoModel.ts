import { serializable, list, object } from 'serializr';
import { RoomStatusHistoryListModel } from './RoomStatusHistoryListModel';

export class RoomDetailsInfoModel {

    @serializable
    KSVRoomNumber: number;

    @serializable
    PMSRoomNumber: number;

    @serializable
    HKRoomNumber: number;

    @serializable
    KSVLocationId: number;

    @serializable
    HKLocationId: number;

    @serializable
    KSVRoomStatus: string;

    @serializable
    HKRoomStatus: string;

    @serializable(list(object(RoomStatusHistoryListModel)))
    roomStatusHistory: RoomStatusHistoryListModel[];

    constructor(KSVRoomNumber: number, 
        PMSRoomNumber: number, 
        HKRoomNumber: number, 
        KSVLocationId: number, 
        HKLocationId: number, 
        KSVRoomStatus: string, 
        HKRoomStatus: string,
        roomStatusHistory: RoomStatusHistoryListModel[]) {
        this.KSVRoomNumber = KSVRoomNumber;
        this.PMSRoomNumber = PMSRoomNumber;
        this.HKRoomNumber = HKRoomNumber;
        this.KSVLocationId = KSVLocationId;
        this.HKLocationId = HKLocationId;
        this.KSVRoomStatus = KSVRoomStatus;
        this.HKRoomStatus = HKRoomStatus;
        this.roomStatusHistory = roomStatusHistory;
    }
}