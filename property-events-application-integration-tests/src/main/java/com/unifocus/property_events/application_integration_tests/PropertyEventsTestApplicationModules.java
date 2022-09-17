package com.unifocus.property_events.application_integration_tests;

import com.unifocus.framework.app.services.ServiceModule;
import com.unifocus.property_events.spring_modules.PropertyEventsApplicationModules;
import com.unifocus.property_events.application_integration_tests.initialization.PropertyEventsTestInitializationServiceModule;

import java.util.ArrayList;
import java.util.Collection;

public class PropertyEventsTestApplicationModules extends PropertyEventsApplicationModules {

   @Override
   public Collection<Class<? extends ServiceModule>> getServiceModules() {

      Collection<Class<? extends ServiceModule>> serviceModules = new ArrayList<>(super.getServiceModules());
      serviceModules.add(PropertyEventsTestInitializationServiceModule.class);

      return serviceModules;
   }
}
