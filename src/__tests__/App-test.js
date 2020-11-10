/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import 'react-native-geolocation-service';
import 'react-native-ble-plx';
import {BleManager} from 'react-native-ble-plx';

import DatePicker from 'react-native-datepicker';
import Voice from '@react-native-community/voice';
import Tts from 'react-native-tts';
import StringSimilarity from 'string-similarity';
import Hyperlink from 'react-native-hyperlink';

import {expect, jest, test} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// jest.mock('react-native', () => require('react-native-ble-plx'));

jest.mock('react-native-ble-plx', () => ({}));

jest.mock('react-native-geolocation-service', () => ({}));

jest.mock('react-native-datepicker', () => ({}));

jest.mock('@react-native-community/voice', () => ({}));

jest.mock('react-native-tts', () => ({}));

jest.mock('string-similarity', () => ({}));

jest.mock('react-native-hyperlink', () => ({}));

jest.useFakeTimers();
it('renders correctly', async () => {
  renderer.create(<App />);
});
