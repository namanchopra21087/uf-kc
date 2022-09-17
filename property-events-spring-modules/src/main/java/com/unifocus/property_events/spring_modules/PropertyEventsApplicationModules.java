package com.unifocus.property_events.spring_modules;

import com.unifocus.framework.app.ApplicationModules;
import com.unifocus.framework.app.domain.DomainModule;
import com.unifocus.framework.app.localization.LocalizationModule;
import com.unifocus.framework.app.services.ServiceModule;
import com.unifocus.framework.app.web.WebModule;
import com.unifocus.property_events.spring_modules.modules.adapters.PropertyEventsApiRestModule;
import com.unifocus.property_events.spring_modules.modules.application_services.PropertyEventsApplicationServicesModule;
import com.unifocus.property_events.spring_modules.modules.domain.PropertyEventsDomainModule;
import com.unifocus.property_events.spring_modules.modules.localization.PropertyEventsLocalizationModule;

import java.util.Collection;
import java.util.Collections;

public class PropertyEventsApplicationModules implements ApplicationModules {

   @Override
   public Class<? extends LocalizationModule> getLocalizationModule() {

      return PropertyEventsLocalizationModule.class;
   }

   @Override
   public Class<? extends DomainModule> getDomainModule() {

      return PropertyEventsDomainModule.class;
   }

   @Override
   public Collection<Class<? extends ServiceModule>> getServiceModules() {

      return Collections.singletonList(PropertyEventsApplicationServicesModule.class);
   }

   @Override
   public Collection<Class<? extends WebModule>> getWebModules() {

      return Collections.singletonList(PropertyEventsApiRestModule.class);
   }
}
