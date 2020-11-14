import moment from 'moment';
import {useState, useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';

// api service
import api from './api';

let intervalID;
let isOn = false;

export class Location {
  userPosition;

  startLocation(switchValue) {
    isOn = true;
    if (switchValue) {
      intervalID = setInterval(() => {
        Geolocation.getCurrentPosition(
          (position) => {
            this.userPosition = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            };
            console.log('position: ', position);
            let geoloc = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            api.post('/geoloc', geoloc);
          },
          (error) => {
            console.log(error.code, error.message);
          },
        );
      }, 4000);
    } else {
      isOn = false;
      clearInterval(intervalID);
    }
  }

  getLocationIsOn() {
    return isOn;
  }
}
