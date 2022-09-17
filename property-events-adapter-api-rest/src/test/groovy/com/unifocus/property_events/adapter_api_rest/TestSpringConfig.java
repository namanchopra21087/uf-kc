package com.unifocus.property_events.adapter_api_rest;

import com.unifocus.framework.hal.spring.AbstractHalSpringConfig;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan
public class TestSpringConfig extends AbstractHalSpringConfig {

   @Override
   protected String getContextName() {

      return "property-events";
   }
}
