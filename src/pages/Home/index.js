import React, { useState, useEffect } from 'react';
import { ScrollView, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Voice from '@react-native-community/voice';
import Tts from 'react-native-tts';
import StringSimilarity from 'string-similarity';

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

function Home({ navigation }) {
  // states
  const [userName, setUserName] = useState('');
  const [buttonWidth, setButtonWidth] = useState('46%');
  const [fontSize, setFontSize] = useState('18px');

  useEffect(() => {
    loadUserName();
    handleFontSize();
    initVoiceListeners();
    checkVoiceIsEnabled();
  });

  function initVoiceListeners() {
    Tts.addEventListener('tts-start', (event) => Voice.stop());
    Tts.addEventListener('tts-finish', (event) => startVoice());

    Voice.onSpeechPartialResults = (e) => {
      console.log('onSpeechPartialResults');
      console.log(e);
    };

    Voice.onSpeechResults = (e) => {
      Voice.stop();
      const phrase = e.value;
      executeVoiceCommand(phrase);
    };

    Voice.onSpeechError = (e) => {
      console.log('onSpeechError');
      console.log(e);
      startVoice();
    };
  }

  async function executeVoiceCommand(phrase) {    
    const phraseLowerCase = phrase[0].toLowerCase();
    const initialCommand = 'elsa';

    if (phraseLowerCase.includes(initialCommand)) {
      if (StringSimilarity.compareTwoStrings(phraseLowerCase, `${initialCommand} para configurações`) >= 0.75) {
        goToSettings();
        Tts.speak('Indo para configurações');
      } else if (StringSimilarity.compareTwoStrings(phraseLowerCase, `${initialCommand} ver informação`) >= 0.75) {
        goToInfo();
        Tts.speak('Indo para informações');
      } else if (StringSimilarity.compareTwoStrings(phraseLowerCase, `${initialCommand} conectar cooler`) >= 0.75) {
        goToConnect();
        Tts.speak('Indo para conexão');
      } else if (StringSimilarity.compareTwoStrings(phraseLowerCase, `${initialCommand} quem somos`) >= 0.75) {
        goToAboutUs();
        Tts.speak('Indo para quem somos de onde viemos');
      } else if (StringSimilarity.compareTwoStrings(phraseLowerCase, `${initialCommand} sobre o projeto`) >= 0.75) {
        goToAboutProject();
        Tts.speak('Indo para sobre o projeto');
      } else {
        ToastAndroid.show('Não foi possível reconhecer o comando. Tente novamente', 2000);
        Tts.speak('Desculpa, não te entendi. Por favor repita. Let it go!');
      }
    }
  }

  async function startVoice() {
    try {
      const isRecognizing = await Voice.isRecognizing();
      if (!isRecognizing) {
        await Voice.start('pt-BR');
        console.log('escutando');
      }
    } catch (e) {
      console.log('erro ao iniciar ' + e);
    }
  };

  function goToSettings() {
    navigation.navigate('Settings');
  }

  function goToInfo() {
    navigation.navigate('Info');
  }

  function goToConnect() {
    console.log('goToConnect');
  }

  function goToAboutUs() {
    console.log('goToAboutUs');
  }

  function goToAboutProject() {
    console.log('goToAboutProject');
  }

  async function checkVoiceIsEnabled() {
    const isEnabled = await AsyncStorage.getItem('voiceEnabled') === 'true';
    if (isEnabled) {
      startVoice(navigation);
    }
  }

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
              onPress={() => console.log('Atualizar Cooler')}
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
