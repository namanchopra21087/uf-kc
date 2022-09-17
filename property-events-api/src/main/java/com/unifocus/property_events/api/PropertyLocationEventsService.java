package com.unifocus.property_events.api;

import com.unifocus.property_events.api.dto.*;

import java.util.List;

public interface PropertyLocationEventsService extends PropertyEventsService {

   List<PropertyDTO> getPropertyData();
   List<PropertyLocationDTO> getPropertyLocationData(String propertyId);
   PropertyLocationRoomEventsDTO getPropertyLocationEventsRoomStatusHistoryData(String propertyId, String locationId);
   PropertyLocationReservationEventsDTO getPropertyLocationEventsReservationHistoryData(String propertyId, String locationId, String dateFrom, String dateTo);
}
