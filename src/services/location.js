import moment from "moment";
import {useState, useEffect} from "react";
import Geolocation from 'react-native-geolocation-service';

export class Location {
    isOn = false;
    canStart = true;
    userPosition;


    startLocation(hasPermission) {
        this.isOn = true;
        this.canStart = true;

        console.log("cantStart1: ", this.canStart);
        console.log("hasPermission: ", hasPermission);

        let intervalID = setInterval(() => {
            Geolocation.getCurrentPosition(
                position => {
                    this.userPosition = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    }
                    console.log("position: ", position);
                },
                error => {
                    console.log(error.code, error.message);
                }
            )}, 4000);

        if (hasPermission) {
            console.log(intervalID);

            clearInterval(intervalID);

        }
    }

    endLocation() {
        this.isOn = false;
        this.canStart = false;
    }



    getLocationIsOn() {
        return this.isOn;
    }
}

