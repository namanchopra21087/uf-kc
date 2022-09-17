// import {link, LinkModel} from "@unifocus/js-utils";

import { link, LinkModel } from "@unifocus/js-utils";

export class MainModel {      
@link("property-events:property-data")
propertyLink: LinkModel;

@link("property-events:property-location-data")
locationLink: LinkModel;

@link("property-events:property-location-events-reservation-history-data")
reservationHistoryLink: LinkModel;

@link("property-events:property-location-events-room-status-history-data")
roomStatusHistoryLink: LinkModel;

   constructor(propertyLink: LinkModel, locationLink: LinkModel, reservationHistoryLink: LinkModel, roomStatusHistoryLink: LinkModel) {
      this.propertyLink = propertyLink;
      this.locationLink = locationLink;
      this.reservationHistoryLink = reservationHistoryLink;
      this.roomStatusHistoryLink = roomStatusHistoryLink;
   }
}