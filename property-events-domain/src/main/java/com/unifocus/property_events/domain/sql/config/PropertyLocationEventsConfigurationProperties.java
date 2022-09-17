package com.unifocus.property_events.domain.sql.config;
import com.unifocus.framework.jdbc.datasource.DataSourceConfigurationProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;

import javax.inject.Named;

@Named
@ConfigurationProperties(prefix = "unifocus.property-events.datasource")
public class PropertyLocationEventsConfigurationProperties extends DataSourceConfigurationProperties{

}
