import React from 'react';
import Store from './store';
import { Provider } from 'react-redux';
import DrawerNavigator from './routes';

const App =()=>{
  return(
    <Provider store={Store}>
      <DrawerNavigator/>
    </Provider>
  );
}
export default App;