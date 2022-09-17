package com.unifocus.property_events.api.dto;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public record PropertyLocationDTO(Integer id,String description){}
