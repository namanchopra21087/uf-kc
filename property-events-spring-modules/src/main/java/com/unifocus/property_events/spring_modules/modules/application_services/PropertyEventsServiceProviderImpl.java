package com.unifocus.property_events.spring_modules.modules.application_services;

import com.unifocus.framework.app.services.SpringServiceProvider;
import com.unifocus.property_events.api.PropertyEventsService;
import com.unifocus.property_events.api.PropertyEventsServiceProvider;

import javax.inject.Named;

@Named
public class PropertyEventsServiceProviderImpl extends SpringServiceProvider<PropertyEventsService> implements PropertyEventsServiceProvider {

}
