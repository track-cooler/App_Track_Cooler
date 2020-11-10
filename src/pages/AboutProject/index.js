import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert, ToastAndroid, Linking, TouchableOpacity} from 'react-native';
import Voice from '@react-native-community/voice';
import Tts from 'react-native-tts';
import StringSimilarity from 'string-similarity';
import Hyperlink from 'react-native-hyperlink';

// Components
import CustomHeader from '~/components/CustomHeader';
import BtnDefault from '~/components/BtnDefault';
import BtnRefresh from '~/components/BtnRefresh';
import FloatActionButton from '~/components/FloatActionButton';

// Styles
import {Container, Text, InfoText, TextGit, Title, Image, ImageGit, ScrollContainer} from './styles';

// Icons
import micIcon from '../../assets/mic.png';
import ideaIcon from '../../assets/idea.png';
import gitIcon from '../../assets/git.png';


function AboutProject({navigation}) {

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
    } else if (StringSimilarity.compareTwoStrings(phraseLowerCase, `projeto`) >= 0.75) {
      Tts.speak('O projeto  "Track Cooler"  consiste no desenvolvimento de um cooler robô, capaz de monitorar a temperatura interna, seguir o usuário de forma autônoma e fornecer informações por celular via aplicativo.');
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
            <Text fontSize="30px"> Sobre o Projeto </Text>
            <Image source={ideaIcon} />
          </Title>

          <InfoText fontSize="20px"> O projeto  "Track Cooler"  consiste no desenvolvimento de um cooler robô, capaz de monitorar a temperatura interna, seguir o usuário de forma autônoma e fornecer informações por celular via aplicativo. </InfoText>

          <Hyperlink
            linkDefault
            linkStyle={ { color: '#2980b9', fontSize: 15 } }
            linkText={ url => url === 'https://github.com/track-cooler/app_track_cooler' ? 'GitHub - Track Cooler' : url }
          >
            <TextGit fontSize="15px">
                Para saber mais ou contribuir com o projeto, clique em " https://github.com/track-cooler/app_track_cooler ".
            </TextGit>
          </Hyperlink>
          <ImageGit source={gitIcon} />

        </ScrollContainer>
      </Container>
    </>
  );
}

export default AboutProject;
