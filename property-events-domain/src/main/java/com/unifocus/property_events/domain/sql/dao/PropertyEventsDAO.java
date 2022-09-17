package com.unifocus.property_events.domain.sql.dao;

import com.unifocus.framework.jdbc.sqlloader.SqlLoader;
import com.unifocus.framework.spring_jdbc.sql.ConstructorRowMapper;
import com.unifocus.framework.spring_jdbc.sql.Sql;
import com.unifocus.property_events.api.dto.*;
import com.unifocus.property_events.domain.sql.config.DatabaseConfig;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.inject.Inject;
import javax.inject.Named;
import java.time.LocalDateTime;
import java.util.List;

@Named
@Slf4j
public class PropertyEventsDAO {

    private final JdbcTemplate jdbcTemplate;
    private final SqlLoader sqlLoader;

    private final Sql sql;

    @Inject
    public PropertyEventsDAO(DatabaseConfig propertyConfig, SqlLoader sqlLoader, Sql sql) {
        this.jdbcTemplate = new JdbcTemplate(propertyConfig.dataSource());
        this.sqlLoader = sqlLoader;
        this.sql = sql;
    }

    public List<PropertyDTO> findAllPropertyData() {
        log.info("Inside Class:PropertyEventsDAO Method:findAllPropertyData");
        return sql.query(sqlLoader.loadSql("sql/FetchAllProperties"), ConstructorRowMapper.newInstance(PropertyDTO.class)).getResultList();
    }

    public List<PropertyLocationDTO> findPropertyLocationDataByPropertyId(String propertyId) {
        log.info("Inside Class:PropertyEventsDAO Method:findPropertyLocationDataByPropertyId");
        return sql.query(sqlLoader.loadSql("sql/FetchLocationsForPropertySelected"), ConstructorRowMapper.newInstance(PropertyLocationDTO.class))
                .setParameter("propertyId", propertyId)
                .getResultList();
    }

    public PropertyLocationRoomEventsDTO findPropertyLocationEventsRoomStatusHistoryData(String propertyId, String locationId) {
        log.info("Inside Class:PropertyEventsDAO Method:findPropertyLocationEventsRoomStatusHistoryData");

        List<PropertyLocationEventsRoomHistoryDTO> roomStatusHistory = sql.query(sqlLoader.loadSql("sql/FetchEventsSpecificToPropertyAndLocationRoomStatusHistory"), ConstructorRowMapper.newInstance(
                        PropertyLocationEventsRoomHistoryDTO.class))
                .setParameter("propertyId", propertyId)
                .setParameter("locationId", locationId)
                .getResultList();
        PropertyLocationEventsRoomHistoryDTO zerothRoomHistory = roomStatusHistory.get(0);
        PropertyLocationRoomEventsDTO propertyLocationEvents = new PropertyLocationRoomEventsDTO(zerothRoomHistory.ksvRoomNumber(),
                zerothRoomHistory.pmsRoomNumber(),
                zerothRoomHistory.hkRoomNumber(),
                zerothRoomHistory.ksvLocationId(),
                zerothRoomHistory.hkLocationId(),
                zerothRoomHistory.ksvRoomStatus(),
                zerothRoomHistory.hkRoomStatus(),
                roomStatusHistory);
        return propertyLocationEvents;
    }

    public PropertyLocationReservationEventsDTO findPropertyLocationEventsReservationHistoryData(String propertyId, String locationId, String dateFrom, String dateTo) {
        log.info("Inside Class:PropertyEventsDAO Method:findPropertyLocationEventsReservationHistoryData");

        LocalDateTime fromDate = LocalDateTime.parse(dateFrom);
        LocalDateTime toDate = LocalDateTime.parse(dateTo);
        List<PropertyLocationEventsReservationHistoryDTO> reservationHistory = sql.query(sqlLoader.loadSql("sql/FetchEventsSpecificToPropertyAndLocationReservationHistory"), ConstructorRowMapper.newInstance(
                        PropertyLocationEventsReservationHistoryDTO.class))
                .setParameter("propertyId", propertyId)
                .setParameter("locationId", locationId)
                .setParameter("dateFrom", fromDate)
                .setParameter("dateTo", toDate)
                .getResultList();

        PropertyLocationEventsReservationHistoryDTO zerothReservationHistory = reservationHistory.get(0);
        PropertyLocationReservationEventsDTO propertyLocationEvents = new PropertyLocationReservationEventsDTO(zerothReservationHistory.reservationKsvRoomNumber(),
                zerothReservationHistory.reservationKsvGuestName(),
                zerothReservationHistory.reservationKsvReservationStatus(),
                zerothReservationHistory.reservationHkGuestName(),
                zerothReservationHistory.reservationHkReservationStatus(),
                zerothReservationHistory.reservationPmsGuestId(),
                zerothReservationHistory.reservationPmsReservationHd(),
                zerothReservationHistory.reservationLastUpdateTime(),
                reservationHistory);

        return propertyLocationEvents;
    }
}

