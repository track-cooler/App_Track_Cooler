import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

// Components
import BtnDefault from '~/components/BtnDefault';
import SmallBtn from '~/components/SmallBtn';
import CustomHeader from '~/components/CustomHeader';

// Styles
import {Container, ButtonsRow, TextName, InfoText, ButtonView} from './styles';

// Icons
import coolerIcon from '../../assets/cooler.png';
import configIcon from '../../assets/config.png';
import bluetoothIcon from '../../assets/bluetooth.png';
import refreshIcon from '../../assets/refresh.png';
import quemSomosIcon from '../../assets/quem_somos.png';
import ideaIcon from '../../assets/idea.png';

function Home({navigation}) {
  const buttonFontSize = '18px';
  const buttonWidth = '46%';

  const [userName, setUserName] = useState('');

  useEffect(() => {
    loadUserName();
    // saveName();
  });

  const loadUserName = async () => {
    const asyncName = await AsyncStorage.getItem('username');
    const name = asyncName ? asyncName : '(Cadastre seu nome)';
    setUserName(name);
  };

  // const saveName = async () => {
  //   try {
  //     await AsyncStorage.setItem('username', 'Maria');
  //     // Alert.alert('Sucesso', 'Nome de usuário salvo com sucesso');
  //   } catch (e) {
  //     Alert.alert(e);
  //   }
  // };

  return (
    <>
      <CustomHeader isHome />
      <Container>
        <TextName fontSize="30px"> Olá, {userName}</TextName>

        <ButtonsRow>
          <BtnDefault
            text="Info Cooler"
            textColor="#000"
            fontSize={buttonFontSize}
            btnColor="#A9BCD0"
            btnHeight="72px"
            btnWidth={buttonWidth}
            icon={coolerIcon}
            onPress={() => navigation.navigate('Info')}
          />

          <BtnDefault
            text="Configurações"
            textColor="#fff"
            fontSize={buttonFontSize}
            btnColor="#218380"
            btnHeight="72px"
            btnWidth={buttonWidth}
            icon={configIcon}
            onPress={() => navigation.navigate('Settings')}
          />
        </ButtonsRow>

        <ButtonsRow>
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
            icon={refreshIcon}
            onPress={() => console.log('Atualizar Cooler')}
          />
        </ButtonsRow>

        <InfoText fontSize="25px"> Mais sobre nós </InfoText>
        <ButtonsRow>
          <SmallBtn
            text="Quem Somos"
            btnColor="#218380"
            fontSize={buttonFontSize}
            btnHeight="80px"
            btnWidth="80px"
            icon={quemSomosIcon}
            onPress={() => console.log('Sobre Nós')}
          />

          <ButtonView>
            <SmallBtn
              text="Sobre o projeto"
              btnColor="#A9BCD0"
              fontSize={buttonFontSize}
              btnHeight="80px"
              btnWidth="80px"
              icon={ideaIcon}
              onPress={() => console.log('Sobre o Projeto')}
            />
          </ButtonView>
        </ButtonsRow>
      </Container>
    </>
  );
}

export default Home;
