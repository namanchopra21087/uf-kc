package com.unifocus.property_events.spring_modules.modules.adapters;

import com.unifocus.framework.app.web.AbstractWebModule;
import com.unifocus.framework.app.web.ServletDefinition;
import org.springframework.context.annotation.Configuration;

import java.util.Collection;
import java.util.Collections;

@Configuration
public class PropertyEventsApiRestModule extends AbstractWebModule {

   @Override
   public String getBasePath() {

      return "property-events";
   }

   @Override
   public Collection<ServletDefinition> getServletDefinitions() {

      return Collections.singletonList(ServletDefinition.unsecured("api", PropertyEventsApiRestSpringConfig.class));
   }
}
