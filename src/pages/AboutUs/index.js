import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert, ToastAndroid} from 'react-native';
import Voice from '@react-native-community/voice';
import Tts from 'react-native-tts';
import StringSimilarity from 'string-similarity';

// Components
import CustomHeader from '~/components/CustomHeader';
import BtnDefault from '~/components/BtnDefault';
import BtnRefresh from '~/components/BtnRefresh';
import FloatActionButton from '~/components/FloatActionButton';

// Styles
import {Container, Text, InfoText, Title, Image, ScrollContainer} from './styles';

// Icons
import micIcon from '../../assets/mic.png';
import quemSomosIcon from '../../assets/quem_somos.png';


function AboutUs({navigation}) {

  const buttonFontSize = '10px';
  const buttonWidth = '20%';

  const [voiceEnabled, setVoiceEnabled] = useState(false);

  useEffect(() => {
    checkVoiceIsEnabled();
  });

  function initVoiceListeners() {
    Voice.onSpeechPartialResults = (e) => {
      console.log('onSpeechPartialResults');
      console.log(e);
    };

    Voice.onSpeechResults = (e) => {
      console.log('onSpeechResults')
      Voice.stop();
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
    } else if (StringSimilarity.compareTwoStrings(phraseLowerCase, `desenvolvedores`) >= 0.75) {
      Tts.speak('Grupo de discentes dos cursos de engenharia de software, eletrônica, automotiva, aeroespacial e de energia da Universidade de Brasília que estão matriculados na disciplina Projeto Integrador 2.');
    } else if (StringSimilarity.compareTwoStrings(phraseLowerCase, `voltar`) >= 0.75) {
       goToPage('Home');
      Tts.speak('Indo para menu');
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

  return (
    <>
      <CustomHeader />
      {voiceEnabled ? <FloatActionButton icon={micIcon} onPress={() => startVoice()} /> : null}

      <Container>
        <ScrollContainer>
        <Title>
          <Text fontSize="30px"> Quem somos </Text>
          <Image source={quemSomosIcon} />
        </Title>

        <InfoText fontSize="20px"> Grupo de discentes dos cursos de engenharia de software, eletrônica, automotiva, aeroespacial e de energia da Universidade de Brasília que estão matriculados na disciplina Projeto Integrador 2. </InfoText>

        </ScrollContainer>
      </Container>
    </>
  );
}

export default AboutUs;
