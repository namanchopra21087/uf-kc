package com.unifocus.property_events.domain.sql.config;

import com.unifocus.framework.db.schemacontext.SchemaContext;
import com.unifocus.framework.domain.persistence_adapter.jdbc.DefaultJdbcPersistenceAdapterSpringConfig;
import com.unifocus.framework.jdbc.datasource.DataSourceConfigurationProperties;
import com.unifocus.framework.jdbc.sqlloader.SqlLoader;
import com.unifocus.property_events.domain.PropertyEventsDomainPackage;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

import javax.inject.Inject;
import javax.inject.Named;
import javax.sql.DataSource;

@ComponentScan(basePackageClasses = PropertyEventsDomainPackage.class)
@Named
public class DatabaseConfig extends DefaultJdbcPersistenceAdapterSpringConfig {

   @Inject
   PropertyLocationEventsConfigurationProperties properties;
   @Override
   protected SchemaContext getSchemaContext() {
      return null;
   }

   @Override
   protected DataSourceConfigurationProperties getDataSourceConfigurationProperties() {
      return properties;
   }
   @Bean
   public SqlLoader sqlLoader(DataSource dataSource) {
      return SqlLoader.with(PropertyEventsDomainPackage.class, dataSource);
   }

}
