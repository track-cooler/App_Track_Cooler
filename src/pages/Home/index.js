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
import FloatActionButton from '~/components/FloatActionButton';

// Styles
import { Container, ButtonsRow, TextName, InfoText, ButtonView } from './styles';

// Icons
import coolerIcon from '../../assets/cooler.png';
import configIcon from '../../assets/config.png';
import bluetoothIcon from '../../assets/bluetooth.png';
import refreshIcon from '../../assets/refresh.png';
import quemSomosIcon from '../../assets/quem_somos.png';
import ideaIcon from '../../assets/idea.png';
import micIcon from '../../assets/mic.png';

function Home({ navigation }) {
  // states
  const [userName, setUserName] = useState('');
  const [buttonWidth, setButtonWidth] = useState('46%');
  const [fontSize, setFontSize] = useState('18px');
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [btnFirstColor, setBtnFirstColor] = useState('#A9BCD0');
  const [btnSecondColor, setBtnSecondColor] = useState('#218380');


  useEffect(() => {
    loadUserName();
    handleFontSize();
    checkVoiceIsEnabled();
    handleChangeColor();
  });

  function initVoiceListeners() {
    Voice.onSpeechPartialResults = (e) => {
      console.log('onSpeechPartialResults');
      console.log(e);
    };

    Voice.onSpeechResults = (e) => {
      console.log('onSpeechResults')
      Voice.destroy();
      const phrase = e.value;
      executeVoiceCommand(phrase);
    };
  }

  async function executeVoiceCommand(phrase) {
    const phraseLowerCase = phrase[0].toLowerCase();
    const initialCommand = 'elsa';

    console.log('Elsa ouviu isto: ' + phraseLowerCase);

    if (phraseLowerCase === initialCommand) {
      Tts.speak('Você quer brincar na neve?');
    } else if (StringSimilarity.compareTwoStrings(phraseLowerCase, `para configurações`) >= 0.75) {
      goToPage('Settings');
      Tts.speak('Indo para configurações');
    } else if (StringSimilarity.compareTwoStrings(phraseLowerCase, `ver informação`) >= 0.75) {
      goToPage('Info');
      Tts.speak('Indo para informações');
    } else if (StringSimilarity.compareTwoStrings(phraseLowerCase, `conectar`) >= 0.75) {
      // goToPage('Connect');
      Tts.speak('Indo para conexão');
    } else if (StringSimilarity.compareTwoStrings(phraseLowerCase, `quem somos`) >= 0.75) {
       goToPage('AboutUs');
      Tts.speak('Indo para quem somos de onde viemos');
    } else if (StringSimilarity.compareTwoStrings(phraseLowerCase, `sobre o projeto`) >= 0.75) {
       goToPage('AboutProject');
      Tts.speak('Esse projeto me dá vontade de me jogar da ponte, ó?');
    } else {
      ToastAndroid.show('Não foi possível reconhecer o comando. Tente novamente', 2000);
      Tts.speak('Desculpa, não te entendi. Por favor repita.');
    }
  }

  async function startVoice() {
    try {
      await Voice.start('pt-BR');
      const isRecognizing = await Voice.isRecognizing();
    } catch (e) {
      console.log('erro ao iniciar ' + e);
    }
  };

  async function goToPage(page) {
    navigation.navigate(page);
    Voice.removeAllListeners();
    console.log(await Voice.stop());
  }

  async function checkVoiceIsEnabled() {
    const isEnabled = await AsyncStorage.getItem('voiceEnabled') === 'true';
    if (isEnabled) {
      initVoiceListeners();
    }
    setVoiceEnabled(isEnabled);
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

  const handleChangeColor = async () => {
    const firstBtnColor = await AsyncStorage.getItem('btnFirstColor');
    const secondBtnColor = await AsyncStorage.getItem('btnSecondColor');

    // se existir no asyncStorage pega o valor, se não seta um valor inicial
    const firstColor = !firstBtnColor ? '#A9BCD0' : firstBtnColor;
    const secondColor = !secondBtnColor ? '#218380' : secondBtnColor;

    if (!firstBtnColor) {
      await AsyncStorage.setItem('btnFirstColor', '#A9BCD0');
    }

    if (!secondBtnColor) {
      await AsyncStorage.setItem('btnSecondColor', '#218380');
    }

    setBtnFirstColor(firstColor);
    setBtnSecondColor(secondColor);
  }

  return (
    <>
      <CustomHeader isHome />
      {voiceEnabled ? <FloatActionButton icon={micIcon} onPress={() => startVoice()} /> : null}

      <ScrollView>
        <Container>

          <TextName fontSize="30px"> Olá, {userName}</TextName>

          <ButtonsRow>
            <BtnDefault
              text="Info Cooler"
              textColor="#000"
              fontSize={fontSize}
              btnColor={btnFirstColor}
              icon={coolerIcon}
              btnHeight="72px"
              btnWidth={buttonWidth}
              onPress={() => goToPage('Info')}
            />

            <BtnDefault
              text="Configurações"
              textColor="#fff"
              fontSize={fontSize}
              btnColor={btnSecondColor}
              btnHeight="72px"
              btnWidth={buttonWidth}
              icon={configIcon}
              onPress={() => goToPage('Settings')}
            />
          </ButtonsRow>

          <ButtonsRow>
            <BtnDefault
              text="Conectar Cooler"
              textColor="#fff"
              fontSize={fontSize}
              btnColor={btnSecondColor}
              btnHeight="72px"
              btnWidth={buttonWidth}
              icon={bluetoothIcon}
              onPress={() => console.log('Conectar')}
            />

            <BtnDefault
              text="Atualizar Cooler"
              textColor="#000"
              fontSize={fontSize}
              btnColor={btnFirstColor}
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
              btnColor={btnSecondColor}
              fontSize={fontSize}
              btnHeight="80px"
              btnWidth="80px"
              icon={quemSomosIcon}
              onPress={() => goToPage('AboutUs')}
            />

            <ButtonView>
              <SmallBtn
                text="Sobre o projeto"
                btnColor={btnFirstColor}
                fontSize={fontSize}
                btnHeight="80px"
                btnWidth="80px"
                icon={ideaIcon}
                onPress={() => goToPage('AboutProject')}
              />
            </ButtonView>
          </ButtonsRow>
        </Container>
      </ScrollView>
    </>
  );
}

export default Home;
