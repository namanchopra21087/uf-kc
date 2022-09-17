package com.unifocus.property_events.adapter_api_rest;

import com.unifocus.framework.hal.builder.HalBuilder;
import com.unifocus.framework.hal.builder.HalResource;
import com.unifocus.property_events.api.PropertyLocationEventsService;
import com.unifocus.property_events.api.PropertyEventsServiceProvider;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;

@RestController
@RequestMapping("/v1")
public class PropertyLocationEventsRestController {

    private final PropertyEventsServiceProvider propertyEventsServiceProvider;
    private final HalBuilder halBuilder;

    @Inject
    public PropertyLocationEventsRestController(PropertyEventsServiceProvider propertyEventsServiceProvider, HalBuilder halBuilder) {
        this.propertyEventsServiceProvider = propertyEventsServiceProvider;
        this.halBuilder = halBuilder;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/property-data", produces = "application/hal+json")
    public HalResource getPropertyData() {
        return halBuilder.newResource(propertyEventsServiceProvider.getService(PropertyLocationEventsService.class).getPropertyData())
                .build();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/property-location-data/{propertyId}", produces = "application/hal+json")
    public HalResource getPropertyLocationData(@PathVariable String propertyId) {
        return halBuilder.newResource(propertyEventsServiceProvider.getService(PropertyLocationEventsService.class).getPropertyLocationData(propertyId))
                .build();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/property-location-events-room-status-history/{propertyId}", produces = "application/hal+json")
    public HalResource getPropertyLocationEventsRoomStatusHistoryData(@PathVariable(value = "propertyId") String propertyId, @RequestParam(value = "locationId") String locationId) {
        return halBuilder.newResource(propertyEventsServiceProvider.getService(PropertyLocationEventsService.class).getPropertyLocationEventsRoomStatusHistoryData(propertyId, locationId))
                .build();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/property-location-events-reservation-status-history/{propertyId}", produces = "application/hal+json")
    public HalResource getPropertyLocationEventsReservationStatusHistoryData(@PathVariable(value = "propertyId") String propertyId,
                                                                             @RequestParam(value = "locationId") String locationId,
                                                                             @RequestParam(value = "dateFrom") String dateForm,
                                                                             @RequestParam(value = "dateTo") String dateTo) {
        return halBuilder.newResource(propertyEventsServiceProvider.getService(PropertyLocationEventsService.class)
                        .getPropertyLocationEventsReservationHistoryData(propertyId, locationId, dateForm, dateTo))
                .build();
    }
}
