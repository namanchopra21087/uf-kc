package com.unifocus.property_events.spring_modules.modules.domain;

import com.unifocus.framework.app.domain.AbstractDomainModule;
import com.unifocus.property_events.domain.PropertyEventsDomainPackage;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackageClasses = {PropertyEventsDomainPackage.class})
public class PropertyEventsDomainModule extends AbstractDomainModule {

}
