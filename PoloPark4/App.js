import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Tabs from './navigation/Tabs';
import AboutScreen from './screens/AboutScreen';


const Drawer = createDrawerNavigator();

const App =() => {
  return (
    <NavigationContainer>


     
<Drawer.Navigator initialRouteName="Home">

   <Drawer.Screen name="Home" component={Tabs} /> 
   <Drawer.Screen name="About" component={AboutScreen} />  
</Drawer.Navigator>

       
     
    </NavigationContainer>
  );
}

<Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
  {/* screens */}
</Drawer.Navigator>

export default App;