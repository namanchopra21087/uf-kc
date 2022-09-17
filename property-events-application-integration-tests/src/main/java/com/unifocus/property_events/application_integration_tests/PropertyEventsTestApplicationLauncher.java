package com.unifocus.property_events.application_integration_tests;

import com.unifocus.framework.app.Application;
import com.unifocus.framework.app.ApplicationBuilder;
import com.unifocus.framework.app.ApplicationLauncher;
import com.unifocus.framework.db.schemacontext.SchemaContext;
import com.unifocus.property_events.application_integration_tests.initialization.PropertyEventsInitializeTestService;
import com.unifocus.property_events.application_integration_tests.initialization.PropertyEventsTestInitializationServiceProvider;
import com.unifocus.property_events.application_integration_tests.security_filter.PropertyEventsTestSecurityFilterConfig;

public class PropertyEventsTestApplicationLauncher extends ApplicationLauncher {

   @Override
   protected ApplicationBuilder createApplicationBuilder() {

      return ApplicationBuilder.newApplication("test-property-events")
                               .withRootConfigClass(PropertyEventsTestSecurityFilterConfig.class)
                               .withApplicationModules(new PropertyEventsTestApplicationModules());
   }

   @Override
   protected SchemaContext getSchemaContext() {

      return null;
   }

   public static void main(String[] args) {

      System.setProperty("spring.profiles.active", "test");

      new PropertyEventsTestApplicationLauncher().run(args);

      Application application = PropertyEventsTestApplicationLauncher.getApplication();

      application.getServiceProvider(PropertyEventsTestInitializationServiceProvider.class)
                 .getService(PropertyEventsInitializeTestService.class)
                 .initialize();
   }
}
