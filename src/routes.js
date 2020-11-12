import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// header
import CustomHeader from '~/components/CustomHeader';
// pages
import Home from './pages/Home';
import Settings from './pages/Settings';
import Info from './pages/Info';
import AboutUs from './pages/AboutUs';
import AboutProject from './pages/AboutProject';

const Navigation = createStackNavigator();

const Routes = () => {
  return (
    <Navigation.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#eff1f9'},
      }}>
      <Navigation.Screen name="Home" component={Home} />
      <Navigation.Screen name="Settings" component={Settings} />
      <Navigation.Screen name="Info" component={Info} />
      <Navigation.Screen name="AboutUs" component={AboutUs} />
      <Navigation.Screen name="AboutProject" component={AboutProject} />
    </Navigation.Navigator>
  );
};

export default Routes;
