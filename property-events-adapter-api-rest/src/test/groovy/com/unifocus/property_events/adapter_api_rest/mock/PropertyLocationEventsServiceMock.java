package com.unifocus.property_events.adapter_api_rest.mock;

import com.unifocus.property_events.api.PropertyLocationEventsService;
import com.unifocus.property_events.api.dto.*;
import com.unifocus.property_events.domain.sql.dao.PropertyEventsDAO;

import javax.inject.Inject;
import javax.inject.Named;
import java.util.List;

@Named
public class PropertyLocationEventsServiceMock implements PropertyLocationEventsService {

   private final PropertyEventsDAO propertyDao;

   @Inject
   public PropertyLocationEventsServiceMock(PropertyEventsDAO propertyDao) {
   this.propertyDao=propertyDao;
   }

   @Override
   public List<PropertyDTO> getPropertyData() {
      return null;
   }

   @Override
   public List<PropertyLocationDTO> getPropertyLocationData(String propertyId) {
      return null;
   }

   @Override
   public PropertyLocationRoomEventsDTO getPropertyLocationEventsRoomStatusHistoryData(String propertyId, String locationId) {
      return null;
   }

   @Override
   public PropertyLocationReservationEventsDTO getPropertyLocationEventsReservationHistoryData(String propertyId, String locationId, String dateFrom, String dateTo) {
      return null;
   }
}
