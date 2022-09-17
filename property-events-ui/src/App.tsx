import * as React from 'react';
import { Application } from '@unifocus/react-application';
import { storeProvider } from './config/StoreProvider';
import { ApplicationRouter } from './ApplicationRouter';
import './App.less';
import "@unifocus/react-uf-grid/dist/lib/react-uf-grid.less";
import "@unifocus/react-uf-grid/dist/lib/ag-grid-theme/assets/index.scss";
const App = () => {
   return (
      <Application storeProvider={storeProvider} mobile={false}>
         <ApplicationRouter/>
      </Application>
   );
};

export default App;
