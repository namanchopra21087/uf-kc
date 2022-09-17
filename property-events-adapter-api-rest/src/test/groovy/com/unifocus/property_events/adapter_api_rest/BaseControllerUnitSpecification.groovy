package com.unifocus.property_events.adapter_api_rest

import com.unifocus.framework.spring.web.test.BaseControllerUnitSpecification
import com.unifocus.property_events.spring_modules.modules.localization.PropertyEventsLocalizationConfiguration
import org.springframework.test.context.ContextConfiguration

@ContextConfiguration(classes = [TestSpringConfig, PropertyEventsLocalizationConfiguration])
class PropertyEventsBaseControllerUnitSpecification extends BaseControllerUnitSpecification {
}
