package com.unifocus.property_events.spring_modules.modules.localization;

import com.unifocus.framework.app.localization.AbstractLocalizationConfiguration;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PropertyEventsLocalizationConfiguration extends AbstractLocalizationConfiguration {

   @Override
   protected String getResourceBundleName() {

      return "property-events-resources";
   }
}
