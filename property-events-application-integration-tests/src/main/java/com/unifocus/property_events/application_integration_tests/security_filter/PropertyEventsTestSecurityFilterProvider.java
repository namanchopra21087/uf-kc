package com.unifocus.property_events.application_integration_tests.security_filter;

import com.unifocus.framework.app.security.SecurityFilterProvider;
import com.unifocus.framework.app.security.SecurityFilterService;

import javax.inject.Named;

@Named
public class PropertyEventsTestSecurityFilterProvider implements SecurityFilterProvider {

   @Override
   public SecurityFilterService getApiSecurityFilterService() {

      return new PropertyEventsTestSecurityFilterService();
   }

   @Override
   public SecurityFilterService getUiSecurityFilterService() {

      return new PropertyEventsTestSecurityFilterService();
   }
}
