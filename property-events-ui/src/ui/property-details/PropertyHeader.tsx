import React, { useEffect, useState } from "react";
import { Option, GridPanel, GridItem, Text, Select, DateRangeInput } from "@unifocus/react-components";
import { AppState } from "../../config/StoreProvider";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocationData } from "../../domain/location/LocationActionCreators";
import { fetchProLocDetailsData, fetchProLocReservationHistoryDetailsData } from "../../domain/property-location-details/ProLocDetailsActionCreators";
import { DataTypeWithInvalid, DateRange } from "@unifocus/js-utils";
import { LocalDate } from "@js-joda/core";


interface LocalProps { }
//tslint:disable
type Props = LocalProps;

export const PropertyHeader = (props: Props) => {
    const dispatch = useDispatch();
    const halLinks = useSelector((s: AppState) => s.mainModelReducer.mainModel);
    const propertyData = useSelector((s: AppState) => s.propertyModelReducer.proprtyData);
    const locationData = useSelector((s: AppState) => s.locationModelReducer.locationData);
    const [selectedPropertyId, setSelectedPropertyId] = useState('');
    const [propertyValue, setPropertyValue] = useState('Select Property');
    const [locationValue, setLocationValue] = useState('Select Location');
    const [dateValue, setDateValue] = useState<DataTypeWithInvalid<DateRange>>(new DateRange(LocalDate.now(), LocalDate.now()));

    useEffect(() => {
        if (propertyData && propertyData.length > 0) {
            setPropertyValue(propertyData[0].propertyName);
            handlePropertyChange(propertyData[0].propertyName);
        }
    }, [propertyData]);

    useEffect(() => {
        if (locationData && locationData.length > 0) {
            setLocationValue(locationData[0].description);
            handleLocationChange(locationData[0].description);
        }
    }, [locationData]);

    const handlePropertyChange = (value: string) => {
        setSelectedPropertyId(value);
        setPropertyValue(value);
        dispatch(fetchLocationData('location'));
        // if (halLinks) {
        // dispatch(fetchLocationData(halLinks.locationLink.getHref({ propertyId: value})));
        // }
    }

    const handleLocationChange = (value: string) => {
        console.log("change location");
        setLocationValue(value);
        dispatch(fetchProLocDetailsData('details'));
        dispatch(fetchProLocReservationHistoryDetailsData('de'));
        // if (halLinks) {
        //     dispatch(fetchProLocDetailsData(halLinks.roomStatusHistoryLink.getHref({ propertyId: selectedPropertyId, locationId: value })));
        //     dispatch(fetchProLocReservationHistoryDetailsData(halLinks.reservationHistoryLink.getHref({ propertyId: selectedPropertyId, locationId: value})))
        // }
    }
    const handleChange = (value: DataTypeWithInvalid<DateRange>) => {
        console.log("on change");
        if (value instanceof  DateRange) {
            setDateValue(value);
            // dispatch(fetchProLocDetailsData('details'));
            // dispatch(fetchProLocReservationHistoryDetailsData('de'));
            // if (halLinks) {
            //     dispatch(fetchProLocDetailsData(halLinks.roomStatusHistoryLink.getHref({ propertyId: selectedPropertyId, locationId: locationValue })));
            //     dispatch(fetchProLocReservationHistoryDetailsData(halLinks.reservationHistoryLink.getHref({ propertyId: selectedPropertyId, locationId: locationValue})))
            // }
        }
      };

    return (
        <GridPanel gap='small'>
            <GridItem row={1} column={1}>
                <Text>{'Select Property'}</Text>
            </GridItem>
            <GridItem row={2} column={1}>
                <Select placeholder='Select Property' value={propertyValue} onChange={handlePropertyChange}>
                    {
                        propertyData && propertyData.length > 0
                        && propertyData.map(property => {
                            return <Option key={property.id} value={property.id}>{property.propertyName}</Option>
                        })
                    }
                </Select>
            </GridItem>
            <GridItem row={1} column={2}>
                <Text>{'Locations'}</Text>
            </GridItem>
            <GridItem row={2} column={2}>
                <Select placeholder='Select location' value={locationValue} onChange={handleLocationChange} showSearch={true}>
                    {
                        locationData && locationData.length > 0
                        && locationData.map(location => {
                            return <Option key={location.id} value={location.id}>{location.description}</Option>
                        })
                    }
                </Select>
            </GridItem>
            <GridItem row={1} column={3}>
                <Text>{'Select a date range'}</Text>
            </GridItem>
            <GridItem row={2} column={3}>
                <DateRangeInput
                    value={dateValue}
                    placeholder={"Enter a date range"}
                    allowClear={true}
                    maxDate={LocalDate.now()}
                    minDate={LocalDate.now().minusDays(6)}
                    onChange={handleChange}
                />
            </GridItem>
        </GridPanel>
    );
};
