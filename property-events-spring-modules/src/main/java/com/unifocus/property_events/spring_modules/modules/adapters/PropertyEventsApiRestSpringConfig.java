package com.unifocus.property_events.spring_modules.modules.adapters;

import com.unifocus.framework.hal.spring.AbstractHalSpringConfig;
import com.unifocus.property_events.adapter_api_rest.PropertyEventsAdapterApiRestPackage;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackageClasses = PropertyEventsAdapterApiRestPackage.class)
public class PropertyEventsApiRestSpringConfig extends AbstractHalSpringConfig {

   @Override
   protected String getContextName() {

      return "property-events";
   }
}
