package com.unifocus.property_events.api.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.time.LocalDateTime;

@JsonInclude(JsonInclude.Include.NON_NULL)
public record PropertyLocationEventsRoomHistoryDTO(
   @JsonIgnore
   Integer ksvRoomNumber,
   @JsonIgnore
   Integer pmsRoomNumber,
   @JsonIgnore
   Integer hkRoomNumber,
   @JsonIgnore
   Integer ksvLocationId,
   @JsonIgnore
   Integer hkLocationId,
   @JsonIgnore
   String ksvRoomStatus,
   @JsonIgnore
   String hkRoomStatus,
   //Need to normalize above fields
   String pmsToKsvEventName,
   String pmsToKsvEventDate,
   String pmsToKsvStatus,
   String pmsToKsvErrorText,
   String ksvToPmsEventName,
   String ksvToPmsEventDate,
   String ksvToPmsStatus,
   String ksvToPmsErrorText,
   Integer pmsToKsvSyncKeyId,
   Integer pmsToKsvLocationId,
   Integer pmsToKsvSyncAction,
   LocalDateTime pmsToKsvCreatedOn,
   LocalDateTime pmsToKsvProcessedOn,
   LocalDateTime pmsToKsvHKUpdateTime,
   LocalDateTime pmsToKsvKSVUpdateTime,
   LocalDateTime pmsToKsvReceivedTime,
   LocalDateTime PmsToKsvProcessedTime,
   LocalDateTime ksvToPmsReceivedTime,
   LocalDateTime ksvToPmsProcessedTime) {}
