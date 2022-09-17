Select
   TCL.Description as ksvRoomNumber,
   TIPEA.ChainId as pmsRoomNumber, -----Need to change to pmsRoomNumber
   CCC.CustomerId as hkRoomNumber,
   TCL.Id as ksvLocationId,
   CCL.LocationId as hkLocationId,
   TCLHKS.ROOMSTATUS as ksvRoomStatus,
   CCLS.HKStatus as hkRoomStatus,
   TIPEA.EventName as pmsToKsvEventName,
   TIPEA.EventData as pmsToKsvEventDate,
   TIPEA.Status as pmsToKsvStatus,
   TIPEA.ErrorText as pmsToKsvErrorText,
   HT.RequestType as ksvToPmsEventName,
   HT.RequestXML as ksvToPmsEventDate,
   HT.Status as ksvToPmsStatus,
   HT.ErrorText as ksvToPmsErrorText,
   SK.SyncKeyId as pmsToKsvSyncKeyId,
   TCL.Id as pmsToKsvLocationId,
   SK.SyncAction as pmsToKsvSyncAction,
   SK.CreatedOn as pmsToKsvCreatedOn,
   SK.ProcessedOn as pmsToKsvProcessedOn,
   CCLS.HKStatusUpdateTime as pmsToKsvHKUpdateTime,
   TCLHKS.LASTUPDATE as pmsToKsvKSVUpdateTime,
   TIPEA.ReceivedTime as pmsToKsvReceivedTime,
   TIPEA.ProcessedTime as PmsToKsvProcessedTime,
   HT.RequestTime as ksvToPmsReceivedTime,
   HT.ProcessedTime as ksvToPmsProcessedTime
from
   Tritonsuite.Core.Location as TCL
      Inner Join CustomerDB_QA.CustomerSchema.Locations as CCL on TCL.Id = CCL.tritonLocationId
      Inner Join TritonSuite.Core.Properties as TCP on TCL.propertyId = TCP.id
      Inner Join Tritonsuite.Core.LocationHKStatus as TCLHKS on TCL.id = TCLHKS.code
      Inner Join CustomerDB_QA.CustomerSchema.Customers as CCC on TCL.propertyId = CCC.TritonPropertyId
      Inner Join Tritonsuite.Interface.PMSEventAudit as TIPEA on TCL.PropertyId = TIPEA.PropertyId
      Inner Join CustomerDB_QA.CustomerSchema.LocationStatus as CCLS on TCL.Id = CCLS.LocationId
      Inner join Tritonsuite.Interface.PMS_HTNGOutEventLogs as HT on TCL.PropertyId = HT.PropertyId
      Inner Join Tritonsuite.Core.HK_SyncKeys_Log as SK on TCL.PropertyId = SK.PropertyId
where
      TCP.IsDel = 0
  and TIPEA.eventname = 'UPDATE ROOM STATUS'
  and SK.EntityCode = 'RoomStatus'
  and TCP.ID = :propertyId
  and TCL.ID = :locationId
order by
   1 desc
