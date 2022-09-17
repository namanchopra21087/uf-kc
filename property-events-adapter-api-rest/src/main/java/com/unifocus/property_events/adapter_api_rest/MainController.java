package com.unifocus.property_events.adapter_api_rest;

import com.unifocus.framework.hal.builder.HalBuilder;
import com.unifocus.framework.hal.builder.HalResource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;

import static com.unifocus.framework.hal.builder.HalLinkBuilder.linkTo;
import static com.unifocus.framework.hal.builder.HalLinkBuilder.methodOn;

@RestController
@RequestMapping(value = "/main")
public class MainController {

    private final HalBuilder halBuilder;

    @Inject
    public MainController(HalBuilder halBuilder) {
        this.halBuilder = halBuilder;
    }

    @RequestMapping(method = RequestMethod.GET, produces = "application/hal+json")
    public HalResource main() {
        return halBuilder.newResource()
                .withLink(linkTo(methodOn(PropertyLocationEventsRestController.class).getPropertyData()).withRel("property-data"))
                .withLink(linkTo(methodOn(PropertyLocationEventsRestController.class).getPropertyLocationData(null))
                        .withRel("property-location-data"))
                .withLink(linkTo(methodOn(PropertyLocationEventsRestController.class).getPropertyLocationEventsRoomStatusHistoryData(null, null))
                        .withQueryParameter("locationId")
                        .withRel("property-location-events-room-status-history-data"))
                .withLink(linkTo(methodOn(PropertyLocationEventsRestController.class).getPropertyLocationEventsReservationStatusHistoryData(null,null,null,null))
                        .withQueryParameter("locationId")
                        .withRel("property-location-events-reservation-history-data"))
                .build();
    }

}
