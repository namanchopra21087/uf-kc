package com.unifocus.property_events.api.dto;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.List;

@JsonInclude(JsonInclude.Include.NON_NULL)
public record PropertyLocationRoomEventsDTO(Integer ksvRoomNumber,
                                            Integer pmsRoomNumber,
                                            Integer hkRoomNumber,
                                            Integer ksvLocationId,
                                            Integer hkLocationId,
                                            String ksvRoomStatus,
                                            String hkRoomStatus,
                                            List<PropertyLocationEventsRoomHistoryDTO> roomStatusHistory){}
