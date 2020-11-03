import React, {useEffect, useState} from 'react';
import { Text, TextInput, StyleSheet, View, Keyboard, Alert, PermissionsAndroid} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { Switch } from 'react-native-paper';
import moment from 'moment';
import config from '../../assets/config.png';
import place from '../../assets/place.png';
import bluetooth from '../../assets/bluetooth.png';
import location from '../../assets/location.png';
import {Image} from './styles';

// components
import CustomHeader from '~/components/CustomHeader';
import Geolocation from "react-native-geolocation-service";



function Settings({navigation}) {
    const [userName, setUserName] = useState('');
    const [hasLocationPermission, setHasLocationPermission] = useState(false);
    const [userPosition, setUserPosition] = useState({});
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [isSwitchOn2, setIsSwitchOn2] = useState(false);


    let date = moment()
        .utcOffset('-03:00');
    let aux = date;

    if(isSwitchOn){
        aux = date;
    }else {
        aux = 0;
    }

    useEffect(() => {


        if (hasLocationPermission) {

            Geolocation.getCurrentPosition(
                position => {
                    setUserPosition({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                error => {
                    console.log(error.code, error.message);
                }
            );
        }

        console.log("userPosition1", userPosition);
    }, [aux]);



    const onToggleSwitch = async () => {

        setIsSwitchOn(!isSwitchOn);

        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            setHasLocationPermission(true);
            console.log('permissão concedida');
        } else {
            console.error('permissão negada');
            setHasLocationPermission(false);
        }
    }

    const onToggleSwitch2 = async () => {
        setIsSwitchOn2(!isSwitchOn2);
    }

    const saveName = async () => {
        setIsSwitchOn(!isSwitchOn);

        try {
            await AsyncStorage.setItem('username', userName);
            Keyboard.dismiss();
            Alert.alert('Sucesso', 'Nome de usuário salvo com sucesso!');
        } catch (e) {
            Alert.alert(e);
        }
    };

    return (
        <>
            <CustomHeader />
            <View style={styles.container}>
                <View style={title.container}>
                    <View style={title.config}>
                        <Text style={title.configura}>Configurações</Text>
                    </View>
                    <View style={title.containerIcon} >
                        <Image style={title.icon} source={config}/>
                    </View>
                </View>

                    <TextInput
                        style={styles.input}
                        placeholder="Digite um nome de usuário"
                        onChangeText={(text) => setUserName(text)}
                    />
                    <TouchableOpacity style={styles.botao} onPress={saveName}>
                        <Text style={styles.textBotao}>Salvar</Text>
                    </TouchableOpacity>
                <View style={styles.container2}>
                    <View style={styles.containerSwitch} >
                        <Image style={styles.icon1} source={place}/>
                        <Text style={styles.textLocal} >Localização</Text>
                    </View>
                    <View style={styles.containerIcon} >
                        <Switch  value={isSwitchOn} onValueChange={onToggleSwitch} />
                    </View>
                </View>
                <View style={styles.container3}>
                    <View style={styles.containerSwitch} >
                        <Image style={styles.icon2} source={bluetooth}/>
                        <Text style={styles.textLocal} >Bluetooth</Text>
                    </View>
                    <View style={styles.containerIcon} >
                        <Switch  value={isSwitchOn2} onValueChange={onToggleSwitch2} />
                    </View>
                </View>
                <View style={styles.container4}>
                    <View style={styles.containerSwitch} >
                        <Image style={styles.icon3} source={location}/>
                        <Text style={styles.textLocal} > Modo Seguir </Text>
                    </View>
                    <View style={styles.containerIcon} >
                        <Switch  value={isSwitchOn2} onValueChange={onToggleSwitch2} />
                    </View>
                </View>
            </View>
        </>
    );
}

const title = StyleSheet.create({
    container: {
        marginTop:-250,
        height: 500,
        flexDirection: 'row',
        paddingLeft:50,
        justifyContent: "space-between",
    },
    config:{
        width: 60,
        fontWeight: 'bold',
    },
    configura:{
        marginLeft:-100,
        fontSize: 24,
    },
    containerIcon:{
        paddingHorizontal: 50,
        fontSize: 24,
        justifyContent: "flex-start",
    },
    icon:{
        marginLeft: -50,

    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
    },
    container3: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        marginTop: 30
    },
    container4: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        marginTop: 30
    },
    icon1:{
        marginLeft:90,
        padding:30,
    },
    icon2:{
        marginLeft:85,
        padding:30,
    },
    icon3:{
        marginLeft:100,
        padding:30,
    },
    containerIcon:{
        marginTop: 13,
        paddingLeft: 50,
        paddingRight: 50,
    },
    containerSwitch: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: "flex-start",
        alignContent: "flex-end",
    },
    textLocal: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginLeft:170,
        marginTop:-35,
    },

    input: {
        marginTop: -400,
        padding: 10,
        width: 300,
        backgroundColor: '#fff',
        fontSize: 16,
        textAlign: "center",
        fontWeight: 'bold',
        borderRadius: 3,
    },
    botao: {
        width: 300,
        height: 42,
        backgroundColor: '#3498db',
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:50,
    },
    textBotao: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});

export default  Settings;