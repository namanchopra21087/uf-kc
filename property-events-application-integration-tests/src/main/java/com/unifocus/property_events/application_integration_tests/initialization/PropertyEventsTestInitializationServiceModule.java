package com.unifocus.property_events.application_integration_tests.initialization;

import com.unifocus.framework.app.services.AbstractServiceModule;
import com.unifocus.framework.app.services.ServiceProvider;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan
public class PropertyEventsTestInitializationServiceModule extends AbstractServiceModule {

   @Override
   public Class<? extends ServiceProvider> getServiceProviderClass() {

      return PropertyEventsTestInitializationServiceProvider.class;
   }
}
