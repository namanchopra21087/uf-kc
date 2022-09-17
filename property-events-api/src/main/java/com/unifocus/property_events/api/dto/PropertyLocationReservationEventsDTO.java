package com.unifocus.property_events.api.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.time.LocalDateTime;
import java.util.List;
@JsonInclude(JsonInclude.Include.NON_NULL)
public record PropertyLocationReservationEventsDTO(
        Integer reservationKsvRoomNumber,
        String reservationKsvGuestName,
        String reservationKsvReservationStatus,
        String reservationHkGuestName,
        String reservationHkReservationStatus,
        Integer reservationPmsGuestId,
        LocalDateTime reservationPmsReservationHd,
        LocalDateTime reservationLastUpdateTime,
        List<PropertyLocationEventsReservationHistoryDTO> reservationHistory) {}
