package com.unifocus.property_events.application_integration_tests

import com.unifocus.framework.app.AbstractWebApplicationSpecification
import com.unifocus.framework.app.Application

class PropertyEventsApplicationIntegrationTest extends AbstractWebApplicationSpecification {

   @Override
   protected Application runApplication() {

      new PropertyEventsTestApplicationLauncher().run()

      return PropertyEventsTestApplicationLauncher.application
   }

   def "should be able to run the application"() {

      def healthResponse = restRequest.get("${baseUrl}/actuator/health").execute()

      expect:
      healthResponse.statusCode == 200
   }

   def "should be able to call the property-data rest service"() {

      def response = restRequest.get("${baseUrl}/property-events/api/v1/property-data").execute()

      expect:
      response.statusCode == 200
      response.contentAsString != null
   }

   def "should call property-location-data"(){

      given:
      def locationId=1036

      when:
      def response=restRequest.get("${baseUrl}/property-events/api/v1/property-location-data/"+locationId).execute()

      then:
      response.statusCode== 200
      response.contentAsString!=null
      response.contentAsString.contains("1001")
      response.contentAsString.contains("31609")
   }

   def "should call property-location-events-data"(){

      def response=restRequest.get("${baseUrl}/property-events/api/v1/property-location-events-data/4148?locationId=187600").execute()

      expect:
      response.statusCode== 200
      response.contentAsString!=null
      response.contentAsString.contains("RWSEH")
      response.contentAsString.contains("187600")
   }

   def "should call property-location-events-data and check correct data set in response"(){

      def response=restRequest.get("${baseUrl}/property-events/api/v1/property-location-events-data/4148?locationId=187599").execute()

      expect:
      response.statusCode== 200
      response.contentAsString!=null
      response.contentAsString.contains("187599")
   }

   def "should call property-location-data via data pipes:#propertyId"(){

      when:
      def response=restRequest.get("${baseUrl}/property-events/api/v1/property-location-data/"+propertyId).execute()

      then:
      response.statusCode== 200
      response.contentAsString!=null

      where:
      propertyId <<[1036,4103,4147,4148,]
   }
}
