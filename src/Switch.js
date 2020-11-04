// import Geolocation from 'react-native-geolocation-service';
// import moment from 'moment';
// import {useEffect, useState} from "react";
// import {PermissionsAndroid} from "react-native";
//
//
//
// module.exports = function() {
//     const [hasLocationPermission, setHasLocationPermission] = useState(false);
//     const [isSwitchOn, setIsSwitchOn] = useState(false);
//     const [userPosition, setUserPosition] = useState({});
//
//     let date = moment()
//         .utcOffset('-03:00');
//     let aux = date;
//
//     if(isSwitchOn){
//         aux = date;
//     }else {
//         aux = 0;
//     }
//
//
//
//     useEffect(() => {
//
//
//         if (hasLocationPermission) {
//
//             Geolocation.getCurrentPosition(
//                 position => {
//                     setUserPosition({
//                         latitude: position.coords.latitude,
//                         longitude: position.coords.longitude,
//                     });
//                 },
//                 error => {
//                     console.log(error.code, error.message);
//                 }
//             );
//         }
//
//         console.log("userPosition1", userPosition);
//     }, [aux]);
//
//     const onToggleSwitch = async () => {
//
//         setIsSwitchOn(!isSwitchOn);
//
//         const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
//         );
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             setHasLocationPermission(true);
//             console.log('permissão concedida');
//         } else {
//             console.error('permissão negada');
//             setHasLocationPermission(false);
//         }
//     }
//
//
// }
//
