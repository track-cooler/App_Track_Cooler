import React, {useState, useEffect} from 'react';
import {ScrollView, ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Voice from '@react-native-community/voice';

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
  // states
  const [userName, setUserName] = useState('');
  const [buttonWidth, setButtonWidth] = useState('46%');
  const [fontSize, setFontSize] = useState('18px');

  useEffect(() => {
    loadUserName();
    handleFontSize();
  });

  const handleFontSize = async () => {
    const fontSizeStorage = await AsyncStorage.getItem('fontSize');

    // se existir no asyncStorage pega o valor, se não seta um valor inicial
    const size = !fontSizeStorage ? '18px' : fontSizeStorage;

    if (!fontSizeStorage) {
      await AsyncStorage.setItem('fontSize', '18px');
    }

    setFontSize(size);
  };

  const loadUserName = async () => {
    const asyncName = await AsyncStorage.getItem('username');
    const name = asyncName ? asyncName : '(Cadastre seu nome)';
    setUserName(name);
  };

  Voice.onSpeechPartialResults =(e) => {
    console.log('onSpeechPartialResults');
    console.log(e);
  };

  Voice.onSpeechResults =(e) => {
    console.log('onSpeechResults');
    console.log(e);
  };

  Voice.onSpeechRecognized = (e) => {
    console.log('onSpeechRecognized');
    console.log(e);
  };

  Voice.onSpeechEnd = (e) => {
    console.log('onSpeechEnd');
    console.log(e);
  };

  Voice.onSpeechError = (e) => {
    console.log('onSpeechError');
    console.log(e);
  };

  const startVoice = async () =>{
    try {
      await Voice.start('pt-BR');
      const isRecognizing = await Voice.isRecognizing();
      if (isRecognizing) {
        ToastAndroid.show('Escuatando...', 1000);
      }
    } catch (e) {
      console.log('erro ao iniciar '+ e);
    }    
  };

  return (
    <>
      <CustomHeader isHome />
      <ScrollView>
        <Container>
          <TextName fontSize="30px"> Olá, {userName}</TextName>

          <ButtonsRow>
            <BtnDefault
              text="Info Cooler"
              textColor="#000"
              fontSize={fontSize}
              btnColor="#A9BCD0"
              icon={coolerIcon}
              btnHeight="72px"
              btnWidth={buttonWidth}
              onPress={() => console.log('Informações Cooler')}
            />

            <BtnDefault
              text="Configurações"
              textColor="#fff"
              fontSize={fontSize}
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
              fontSize={fontSize}
              btnColor="#218380"
              btnHeight="72px"
              btnWidth={buttonWidth}
              icon={bluetoothIcon}
              onPress={() => console.log('Conectar cooler')}
            />

            <BtnDefault
              text="Atualizar Cooler"
              textColor="#000"
              fontSize={fontSize}
              btnColor="#A9BCD0"
              btnHeight="72px"
              btnWidth={buttonWidth}
              icon={refreshIcon}
              onPress={() => voice()}
            />
          </ButtonsRow>

          <InfoText fontSize="25px"> Mais sobre nós </InfoText>
          <ButtonsRow>
            <SmallBtn
              text="Quem Somos"
              btnColor="#218380"
              fontSize={fontSize}
              btnHeight="80px"
              btnWidth="80px"
              icon={quemSomosIcon}
              onPress={() => console.log('Sobre Nós')}
            />

            <ButtonView>
              <SmallBtn
                text="Sobre o projeto"
                btnColor="#A9BCD0"
                fontSize={fontSize}
                btnHeight="80px"
                btnWidth="80px"
                icon={ideaIcon}
                onPress={() => console.log('Sobre o Projeto')}
              />
            </ButtonView>
          </ButtonsRow>
        </Container>
      </ScrollView>
    </>
  );
}

export default Home;
