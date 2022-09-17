import React, { useEffect } from 'react';
import { ContentPanel, PagePanel, Toolbar } from '@unifocus/react-components';
import { Icons } from '@unifocus/react-icons';
import { formatMessage } from '@unifocus/js-utils';
import { PropertyHeader } from '../property-details/PropertyHeader';
// import { PropertyDetails } from '../property-details/PropertyDetails';
import { useDispatch } from 'react-redux';
import { fetchPropertyData } from '../../domain/property/PropertyActionCreators';
import { TabsSection } from '../Tabs';
// import { fetchSetup } from '../../domain/main-model/MainModelActionCreators';

const header = {
   title: formatMessage('Property_Location_Events'),
   logo: <Icons.Home/>,
   helpText: formatMessage('Property_Location_Events')
};


export const MainView = () => {
   
   const dispatch = useDispatch();
   
   useEffect(() => {
      // dispatch(fetchSetup());
      dispatch(fetchPropertyData('property'));
   }, []);
   
   const toolbar = (
      <Toolbar
        leftContent={<PropertyHeader />}
      />);

   return (
      <PagePanel
         header={header}
      >
         <ContentPanel header={{ content: toolbar}}>
            <TabsSection />
         </ContentPanel>
      </PagePanel>
   );
};

