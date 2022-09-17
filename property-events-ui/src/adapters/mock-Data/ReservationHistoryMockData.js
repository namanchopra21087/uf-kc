export const ReservationHistoryMockData = {
    data: {
        "ReservationKsvRoomNumber":"101",
		"ReservationKsvGuestName":"Himanshu Mittal",
		"ReservationKsvReservationStatus":"In-House",
		"ReservationHkGuestName":"Himanshu MIttal",
		"ReservationHkReservationStatus":"Stayover",
		"ReservationPmsGuestId":"101234",
		"ReservationPmsReservationHd": "1992-04-25T07:06:23",
		"ReservationLastUpdateTime": "1992-04-25T07:06:23",
        "reservationHistory":[{
			/**Reservation History Grid-2**/
			"PmsToKsvEventName":"New Reservation",
			"PmsToKsvEventId":"123456",
			"PmsToKsvEventDetails":"<UpdateRoomStatusRequest xmlns='' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema'><locationHKStatus><RoomNo>1550</RoomNo><RoomStatus>INSPECTED</RoomStatus><TaskType>0</TaskType><RepairStartDate>0001-01-01T00:00:00</RepairStartDate><RepairEndDate>0001-01-01T00:00:00</RepairEndDate><CompleteDate>0001-01-01T00:00:00</CompleteDate><PropertyId>4148</PropertyId></locationHKStatus></UpdateRoomStatusRequest>",
			"PmsToKsvTimeStamp":"1992-04-25T07:06:23",
			"PmsToKsvStatus":"Success",
			"PmsToKsvErrorText":"LOCATION_NOT_MAPPED",
			"PmsToKsvUpdatetTime":"1992-04-25T07:06:23",
			/**Reservation History Grid-3**/
			"KsvToHkSyncKeyId":"1625374846",
			"KsvToHkKsvReservationId":"120045",
			"KsvToHkSyncAction":"Update",
			"KsvToHkCreatedOn":"1992-04-25T07:06:23",
			"KsvToHkProcessedOn":"1992-04-25T07:06:23",
			"KsvToHkStatus":"Error",
			"KsvToHkErrorText":"LOCATION_NOT_MAPPED",
			"KsvToHkUpdateTime":"1992-04-25T07:06:23"
		},
        {
			/**Reservation History Grid-2**/
			"PmsToKsvEventName":"New Reservation",
			"PmsToKsvEventId":"123456",
			"PmsToKsvEventDetails":"<UpdateRoomStatusRequest xmlns='' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema'><locationHKStatus><RoomNo>1551</RoomNo><RoomStatus>INSPECTED</RoomStatus><TaskType>0</TaskType><RepairStartDate>0001-01-01T00:00:00</RepairStartDate><RepairEndDate>0001-01-01T00:00:00</RepairEndDate><CompleteDate>0001-01-01T00:00:00</CompleteDate><PropertyId>4148</PropertyId></locationHKStatus></UpdateRoomStatusRequest>",
			"PmsToKsvTimeStamp":"1992-04-25T07:06:23",
			"PmsToKsvStatus":"Success",
			"PmsToKsvErrorText":"LOCATION_NOT_MAPPED",
			"PmsToKsvUpdatetTime":"1992-04-25T07:06:23",
			/**Reservation History Grid-3**/
			"KsvToHkSyncKeyId":"1625374846",
			"KsvToHkKsvReservationId":"120045",
			"KsvToHkSyncAction":"Update",
			"KsvToHkCreatedOn":"1992-04-25T07:06:23",
			"KsvToHkProcessedOn":"1992-04-25T07:06:23",
			"KsvToHkStatus":"Error",
			"KsvToHkErrorText":"LOCATION_NOT_MAPPED",
			"KsvToHkUpdateTime":"1992-04-25T07:06:23"
		}]
    }
}