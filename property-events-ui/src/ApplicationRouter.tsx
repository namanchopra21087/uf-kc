import * as React from 'react';
import { Icons } from '@unifocus/react-icons';
import { formatMessage } from '@unifocus/js-utils';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ApplicationRouterPanel } from '@unifocus/react-components';
import { MainView } from './ui/main/MainView';

const menuItems = [
   {
      baseRoute: '/',
      title: formatMessage('Property_Location_Events'),
      icon: <Icons.Home/>
   }
];

export const ApplicationRouter = () => {
   return (
      <ApplicationRouterPanel
         menuItems={menuItems}
      >
         <Switch>
            <Route path={'/'} exact={true}>
               <MainView/>
            </Route>
            <Route>
               <Redirect to={"/"}/>
            </Route>
         </Switch>
      </ApplicationRouterPanel>
   );
};

