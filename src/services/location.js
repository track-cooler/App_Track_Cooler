import moment from "moment";
import {useState, useEffect} from "react";
import Geolocation from 'react-native-geolocation-service';

let intervalID;

export class Location {
    isOn = false;
    canStart = true;
    userPosition;

    startLocation(switchValue) {
        this.isOn = true;
        this.canStart = true;

        console.log("cantStart1: ", this.canStart);
        console.log("SwitchValue DENTRO DO STARTLOCATION: ", switchValue);
        if(switchValue) {
            intervalID = setInterval(() => {
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
                },
                console.log("ContinuouID: ", intervalID),
            )}, 4000);
        }else{
            console.log("PAROU!", intervalID);
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

