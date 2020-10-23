import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// header
import CustomHeader from '~/components/CustomHeader';
// pages
import Home from './pages/Home';
import Settings from './pages/Settings';

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
    </Navigation.Navigator>
  );
};

export default Routes;
