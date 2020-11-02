import React, {useState} from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Keyboard,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BleManager} from 'react-native-ble-plx';
import Geolocation from 'react-native-geolocation-service';

// components
import CustomHeader from '~/components/CustomHeader';
import ToggleDefault from '~/components/Toggle';
import bluetoothIcon from '../../assets/bluetooth.png';
import locateIcon from '../../assets/locate.png';

function Settings({navigation}) {
  const [userName, setUserName] = useState('');
  const [btStatus, setBluetooth] = useState(false);
  const [gpsStatus, setGpsStatus] = useState(false);

  const bleManager = new BleManager();
  async function getStateBluetooth() {
    const status = (await bleManager.state()) === 'PoweredOn';
    return status;
  }

  async function getStateGps() {
    const status = await AsyncStorage.getItem('gpsStatus');
    return status ? status === 'true' : false;
  }

  async function changeStateBlutooth(state) {
    if (state) {
      await bleManager.enable();
    } else {
      await bleManager.disable();
    }
  }

  async function changeStateGps(state) {
    if (state) {
      const hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (hasPermission) {
        Geolocation.getCurrentPosition(
          async (position) => {
            await AsyncStorage.setItem('gpsStatus', 'true');
          },
          (error) => {
            // eslint-disable-next-line no-alert
            alert('GPS do dispositivo desativado, por favor, ative-o.');
          },
        );
      } else {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        changeStateGps(state);
      }
    } else {
      AsyncStorage.setItem('gpsStatus', 'false');
    }
  }

  getStateBluetooth().then((status) => setBluetooth(status));
  getStateGps().then((status) => setGpsStatus(status));

  const saveName = async () => {
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
        <TextInput
          style={styles.input}
          placeholder="Digite um nome de usuário"
          onChangeText={(text) => setUserName(text)}
        />

        <TouchableOpacity style={styles.botao} onPress={saveName}>
          <Text style={styles.textBotao}>Salvar</Text>
        </TouchableOpacity>

        <ToggleDefault
          text="Bluetooth"
          fontSize="24px"
          value={btStatus}
          icon={bluetoothIcon}
          onChange={(event) => {
            event.persist();
            changeStateBlutooth(event.nativeEvent.value).then(() => {
              setBluetooth(event.nativeEvent.value);
            });
          }}
        />

        <ToggleDefault
          text="Localização"
          fontSize="24px"
          value={gpsStatus}
          icon={locateIcon}
          onChange={(event) => {
            event.persist();
            changeStateGps(event.nativeEvent.value).then(() => {
              setGpsStatus(event.nativeEvent.value);
            });
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
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
  },
  textBotao: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default Settings;
