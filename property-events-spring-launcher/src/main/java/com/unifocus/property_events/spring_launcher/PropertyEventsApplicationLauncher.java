package com.unifocus.property_events.spring_launcher;

import com.unifocus.framework.app.ApplicationBuilder;
import com.unifocus.framework.app.ApplicationLauncher;
import com.unifocus.framework.db.schemacontext.SchemaContext;
import com.unifocus.rms.security.RmsSecurityApplicationModules;
import com.unifocus.singularity.support.spring_modules.SingularitySupportApplicationModules;
import com.unifocus.uniportal_support.spring_launcher.UniPortalApplicationBuilder;
import com.unifocus.property_events.spring_modules.PropertyEventsApplicationModules;

public class PropertyEventsApplicationLauncher extends ApplicationLauncher {

   @Override
   protected ApplicationBuilder createApplicationBuilder() {

      return UniPortalApplicationBuilder.newApplication("property-events")
                                        .withApplicationModules(new RmsSecurityApplicationModules())
                                        .withApplicationModules(new SingularitySupportApplicationModules())
                                        .withApplicationModules(new PropertyEventsApplicationModules());
   }

   @Override
   protected SchemaContext getSchemaContext() {

      return null;
   }

   public static void main(String[] args) {

      new PropertyEventsApplicationLauncher().run(args);
   }
}
