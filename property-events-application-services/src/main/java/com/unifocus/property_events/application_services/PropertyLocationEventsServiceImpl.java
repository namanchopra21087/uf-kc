package com.unifocus.property_events.application_services;

import com.unifocus.property_events.api.PropertyLocationEventsService;
import com.unifocus.property_events.api.dto.*;
import com.unifocus.property_events.domain.sql.dao.PropertyEventsDAO;
import lombok.extern.slf4j.Slf4j;

import javax.inject.Inject;
import javax.inject.Named;
import java.util.List;

@Named
@Slf4j
public class PropertyLocationEventsServiceImpl implements PropertyLocationEventsService {

   private final PropertyEventsDAO propertyDao;

   @Inject
   public PropertyLocationEventsServiceImpl(PropertyEventsDAO propertyDao) {

      this.propertyDao = propertyDao;
   }

   @Override
   public List<PropertyDTO> getPropertyData() {
      log.info("Inside PropertyLocationEventsServiceImpl to fetch propertyData");
      return propertyDao.findAllPropertyData();
   }

   @Override
   public List<PropertyLocationDTO> getPropertyLocationData(String propertyId) {
      log.info("Inside PropertyLocationEventsServiceImpl to fetch propertyLocationData");
      return propertyDao.findPropertyLocationDataByPropertyId(propertyId);
   }

   @Override
   public PropertyLocationRoomEventsDTO getPropertyLocationEventsRoomStatusHistoryData(String propertyId, String locationId) {
      log.info("Inside PropertyLocationEventsServiceImpl to fetch getPropertyLocationEventsRoomStatusHistoryData");
      return propertyDao.findPropertyLocationEventsRoomStatusHistoryData(propertyId, locationId);
   }

   @Override
   public PropertyLocationReservationEventsDTO getPropertyLocationEventsReservationHistoryData(String propertyId, String locationId, String dateFrom, String dateTo) {
      log.info("Inside PropertyLocationEventsServiceImpl to fetch getPropertyLocationEventsReservationHistoryData");
      return propertyDao.findPropertyLocationEventsReservationHistoryData(propertyId, locationId, dateFrom, dateTo);
   }
}
