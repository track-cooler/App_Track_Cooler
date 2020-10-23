import React from 'react';

import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';

import Home from './pages/Home';

require('dotenv').config()

export default function App() {
  return <Home />;
}
