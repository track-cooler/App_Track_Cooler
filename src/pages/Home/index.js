import React from 'react';
import { Header } from "react-native-elements";

import { Container, Label, Image } from './styles';
import BtnDefault from '../../components/btnDefault';

import coolerIcon from '../../assets/cooler.png';
import configIcon from '../../assets/config.png';
import bluetoothIcon from '../../assets/bluetooth.png';
import appIcon from '../../assets/appIcon.png';


function Home() {
  const buttonFontSize = '18px';
  const buttonWidth = '46%';

  const userName = 'Maria'
  return (
    <>
      <Header
        placement="center"
        leftComponent={<Image source={appIcon} />}
        centerComponent={{ text: 'Track Cooler', style: { width: '100%', color: '#fff', fontWeight: "bold", fontSize: 36 } }}
        rightContainerStyle={{flex: 0}}
        containerStyle={{ backgroundColor: '#373F51', justifyContent: "space-evenly" }}
      />

      <Container>
        <Label fontSize="20px"> Olá, {userName}</Label>
      </Container>

      <Container>
        <BtnDefault
          text="Info Cooler"
          textColor="#000"
          fontSize={buttonFontSize}
          btnColor="#A9BCD0"
          icon={coolerIcon}
          btnHeight="72px"
          btnWidth={buttonWidth}
          onPress={() => console.log('Informações Cooler')}
        />

        <BtnDefault
          text="Configurações"
          textColor="#fff"
          fontSize={buttonFontSize}
          btnColor="#218380"
          btnHeight="72px"
          btnWidth={buttonWidth}
          icon={configIcon}
          onPress={() => console.log('Configurações')}
        />
      </Container>

      <Container>
        <BtnDefault
          text="Conectar Cooler"
          textColor="#fff"
          fontSize={buttonFontSize}
          btnColor="#218380"
          btnHeight="72px"
          btnWidth={buttonWidth}
          icon={bluetoothIcon}
          onPress={() => console.log('Conectar Cooler')}
        />

        <BtnDefault
          text="Atualizar Cooler"
          textColor="#000"
          fontSize={buttonFontSize}
          btnColor="#A9BCD0"
          btnHeight="72px"
          btnWidth={buttonWidth}
          icon={configIcon}
          onPress={() => console.log('Atualizar Cooler')}
        />
      </Container>

      <Label fontSize='18px'> Mais sobre nós </Label>
      
      <Container></Container>
    </>
  );
}

export default Home;
