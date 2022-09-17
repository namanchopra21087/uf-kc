package com.unifocus.property_events.application_integration_tests.security_filter;

import com.unifocus.framework.app.security.FilterServices;
import com.unifocus.framework.app.security.SecurityFilterService;

import javax.servlet.ServletException;
import java.io.IOException;

public class PropertyEventsTestSecurityFilterService implements SecurityFilterService {

   @Override
   public void doFilter(FilterServices filterServices) throws IOException, ServletException {

      filterServices.doFilter();
   }
}
