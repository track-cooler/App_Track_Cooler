import React, { useState, useEffect } from 'react';
import { ScrollView, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Voice from '@react-native-community/voice';

// Components
import BtnDefault from '~/components/BtnDefault';
import SmallBtn from '~/components/SmallBtn';
import CustomHeader from '~/components/CustomHeader';

// Styles
import { Container, ButtonsRow, TextName, InfoText, ButtonView } from './styles';

// Icons
import coolerIcon from '../../assets/cooler.png';
import configIcon from '../../assets/config.png';
import bluetoothIcon from '../../assets/bluetooth.png';
import refreshIcon from '../../assets/refresh.png';
import quemSomosIcon from '../../assets/quem_somos.png';
import ideaIcon from '../../assets/idea.png';

function initVoiceListeners(navigation) {
  Voice.onSpeechPartialResults = (e) => {
    console.log('onSpeechPartialResults');
    console.log(e);
  };

  Voice.onSpeechResults = (e) => {
    const phrase = e.value;
    executeVoiceCommand(phrase, navigation);
  };

  Voice.onSpeechRecognized = (e) => {
    console.log('onSpeechRecognized');
    console.log(e);
  };

  Voice.onSpeechError = (e) => {
    console.log('onSpeechError');
    console.log(e);
  };
}

async function executeVoiceCommand(phrase, navigation) {
  if (phrase.includes('ir para configurações')) {
    goToSettings(navigation);
  } else if (phrase.includes('ver informação')){
    goToInfo(navigation);
  } else if (phrase.includes('conectar cooler')) {
    goToConnect(navigation);
  } else if (phrase.includes('quem somos')) {
    goToAboutUs(navigation);
  } else if(phrase.includes('sobre o projeto')) {
    goToAboutProject(navigation);
  } else {
    ToastAndroid.show('Não foi possível reconhecer o comando. Tente novamente', 2000);
  }
}

async function startVoice(navigation) {
  try {
    initVoiceListeners(navigation);
    await Voice.start('pt-BR');
    const isRecognizing = await Voice.isRecognizing();
    if (isRecognizing) {
      ToastAndroid.show('Escuatando...', 1000);
    }
  } catch (e) {
    console.log('erro ao iniciar ' + e);
  }
};

function goToSettings(navigation) {
  navigation.navigate('Settings');
}

function goToInfo(navigation) {
  navigation.navigate('Info');
}

function goToConnect(navigation) {
  console.log('goToConnect');
}

function goToAboutUs(navigation) {
  console.log('goToAboutUs');
}

function goToAboutProject(navigation) {
  console.log('goToAboutProject');
}

function Home({ navigation }) {
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
              onPress={() => goToInfo(navigation)}
            />

            <BtnDefault
              text="Configurações"
              textColor="#fff"
              fontSize={fontSize}
              btnColor="#218380"
              btnHeight="72px"
              btnWidth={buttonWidth}
              icon={configIcon}
              onPress={() => goToSettings(navigation)}
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
              onPress={() => goToConnect(navigation)}
            />

            <BtnDefault
              text="Atualizar Cooler"
              textColor="#000"
              fontSize={fontSize}
              btnColor="#A9BCD0"
              btnHeight="72px"
              btnWidth={buttonWidth}
              icon={refreshIcon}
              onPress={() => startVoice(navigation)}
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
              onPress={() => goToAboutUs(navigation)}
            />

            <ButtonView>
              <SmallBtn
                text="Sobre o projeto"
                btnColor="#A9BCD0"
                fontSize={fontSize}
                btnHeight="80px"
                btnWidth="80px"
                icon={ideaIcon}
                onPress={() => goToAboutProject(navigation)}
              />
            </ButtonView>
          </ButtonsRow>
        </Container>
      </ScrollView>
    </>
  );
}

export default Home;
