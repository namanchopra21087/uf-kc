package com.unifocus.property_events.adapter_api_rest.mock;

import com.unifocus.framework.app.services.SpringServiceProvider;
import com.unifocus.property_events.api.PropertyEventsService;
import com.unifocus.property_events.api.PropertyEventsServiceProvider;

import javax.inject.Named;

@Named
public class PropertyEventsServiceProviderMock extends SpringServiceProvider<PropertyEventsService> implements PropertyEventsServiceProvider {

}
