package com.unifocus.property_events.spring_modules.modules.application_services;

import com.unifocus.framework.app.services.AbstractServiceModule;
import com.unifocus.property_events.api.PropertyEventsServiceProvider;
import com.unifocus.property_events.application_services.PropertyEventsApplicationServicesPackage;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackageClasses = {PropertyEventsApplicationServicesPackage.class, PropertyEventsApplicationServicesModule.class})
public class PropertyEventsApplicationServicesModule extends AbstractServiceModule<PropertyEventsServiceProvider> {

   @Override
   public Class<? extends PropertyEventsServiceProvider> getServiceProviderClass() {

      return PropertyEventsServiceProviderImpl.class;
   }
}
