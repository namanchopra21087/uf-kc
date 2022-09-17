package com.unifocus.property_events.api.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.time.LocalDateTime;

@JsonInclude(JsonInclude.Include.NON_NULL)
public record PropertyLocationEventsReservationHistoryDTO(
        @JsonIgnore
        Integer reservationKsvRoomNumber,
        @JsonIgnore
        String reservationKsvGuestName,
        @JsonIgnore
        String reservationKsvReservationStatus,
        @JsonIgnore
        String reservationHkGuestName,
        @JsonIgnore
        String reservationHkReservationStatus,
        @JsonIgnore
        Integer reservationPmsGuestId,
        @JsonIgnore
        LocalDateTime reservationPmsReservationHd,
        @JsonIgnore
        LocalDateTime reservationLastUpdateTime,

        //Need to normalize above fields
        String pmsToKsvEventName,
        Integer pmsToKsvEventId,
        String pmsToKsvEventDetails,
        LocalDateTime pmsToKsvTimeStamp,
        String pmsToKsvStatus,
        String pmsToKsvErrorText,
        LocalDateTime pmsToKsvUpdatetTime,
        Integer ksvToHkSyncKeyId,
        Integer ksvToHkKsvReservationId,
        String ksvToHkSyncAction,
        LocalDateTime ksvToHkCreatedOn,
        LocalDateTime ksvToHkProcessedOn,
        String ksvToHkStatus,
        String ksvToHkErrorText,
        LocalDateTime ksvToHkUpdateTime
) {
}
