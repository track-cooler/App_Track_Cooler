/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import 'react-native-geolocation-service';
import 'react-native-ble-plx';
import {BleManager} from 'react-native-ble-plx';

import {expect, jest, test} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// jest.mock('react-native', () => require('react-native-ble-plx'));

jest.mock('react-native-ble-plx', () => ({}));

jest.mock('react-native-geolocation-service', () => ({}));

jest.useFakeTimers();
it('renders correctly', async () => {
  renderer.create(<App />);
});
