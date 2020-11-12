import React, {useState, useEffect} from 'react';
import DatePicker from 'react-native-datepicker';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert, ToastAndroid} from 'react-native';
import Voice from '@react-native-community/voice';
import Tts from 'react-native-tts';
import StringSimilarity from 'string-similarity';

// api service
import api from '../../services/api';

// Components
import CustomHeader from '~/components/CustomHeader';
import BtnDefault from '~/components/BtnDefault';
import BtnRefresh from '~/components/BtnRefresh';
import FloatActionButton from '~/components/FloatActionButton';

// Styles
import {
  Container,
  ButtonsRow,
  Text,
  Title,
  Section,
  InfoText,
  Image,
  HistoryCard,
  ScrollContainer,
  ImageBat,
} from './styles';

// Icons
import refreshIcon from '../../assets/refresh.png';
import coolerIcon from '../../assets/cooler.png';
import termometroIcon from '../../assets/temperature.png';
import bateriaIcon from '../../assets/bateria.png';
import micIcon from '../../assets/mic.png';

function Info({navigation}) {
  const buttonFontSize = '10px';
  const buttonWidth = '20%';

  // states
  const [voiceEnabled, setVoiceEnabled] = useState(false);

  useEffect(() => {
    loadInfo();
    checkVoiceIsEnabled();
  });

  const loadInfo = async () => {
    console.log('\n\naqui 1');

    const data = await api.get('/cooler-info');

    console.log('\n\naqui 2', data);
  };

  //Alert
  const alertInfo = async () => {
    try {
      Alert.alert('Sucesso!', 'Dados atualizados com sucesso!');
    } catch (e) {
      Alert.alert(e);
    }
  };

  function refreshPage() {
    alertInfo();
  }

  function initVoiceListeners() {
    Voice.onSpeechPartialResults = (e) => {
      console.log('onSpeechPartialResults');
      console.log(e);
    };

    Voice.onSpeechResults = (e) => {
      console.log('onSpeechResults');
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
    } else if (
      StringSimilarity.compareTwoStrings(phraseLowerCase, 'status') >= 0.75
    ) {
      //goToStatus('Status');
      Tts.speak('O cooler está conectado');
    } else if (
      StringSimilarity.compareTwoStrings(phraseLowerCase, 'temperatura') >= 0.75
    ) {
      //goToTemperature('Temperature');
      Tts.speak('A temperatura do cooler é de 4 graus Celsius');
    } else if (
      StringSimilarity.compareTwoStrings(phraseLowerCase, 'nível bateria') >=
      0.75
    ) {
      // goToBatteryLevel('Battery');
      Tts.speak('O nível de bateria do cooler é de 70%');
    } else if (
      StringSimilarity.compareTwoStrings(phraseLowerCase, 'histórico') >= 0.75
    ) {
      // goToHistoric('Historic');
      Tts.speak('O último cooler a se conectar foi o cooler 1');
    } else if (
      StringSimilarity.compareTwoStrings(phraseLowerCase, 'atualizar') >= 0.75
    ) {
      refreshPage('Atualizar');
      Tts.speak('As informações foram atualizadas');
    } else if (
      StringSimilarity.compareTwoStrings(phraseLowerCase, 'voltar') >= 0.75
    ) {
      goToPage('Home');
      Tts.speak('Indo para menu');
    } else {
      ToastAndroid.show(
        'Não foi possível reconhecer o comando. Tente novamente',
        2000,
      );
      Tts.speak('Let it go! Desculpa, não te entendi. Por favor repita.');
    }
  }

  async function startVoice() {
    try {
      await Voice.start('pt-BR');
      const isRecognizing = await Voice.isRecognizing();
    } catch (e) {
      console.log('erro ao iniciar ' + e);
    }
  }

  async function goToStatus(status) {}

  async function goToTemperature(temperature) {}

  async function goToBatteryLevel(battery) {}

  async function goToHistoric(historic) {}

  async function goToPage(page) {
    navigation.navigate(page);
    Voice.removeAllListeners();
    console.log(await Voice.stop());
  }

  async function checkVoiceIsEnabled() {
    const isEnabled = (await AsyncStorage.getItem('voiceEnabled')) === 'true';
    if (isEnabled) {
      initVoiceListeners();
    }
    setVoiceEnabled(isEnabled);
  }

  return (
    <>
      <CustomHeader />
      {voiceEnabled ? (
        <FloatActionButton icon={micIcon} onPress={() => startVoice()} />
      ) : null}

      <Container>
        <ScrollContainer>
          <Title>
            <Image source={coolerIcon} />
            <Text fontSize="26px"> Informações Cooler</Text>
            <ButtonsRow>
              <BtnRefresh
                btnColor="#A9BCD0"
                fontSize={buttonFontSize}
                btnHeight="50px"
                btnWidth="50px"
                icon={refreshIcon}
                onPress={() => refreshPage()}
              />
            </ButtonsRow>
          </Title>

          <Section>
            <InfoText fontSize="20px"> Status </InfoText>
          </Section>
          <InfoText fontSize="30px"> Conectado </InfoText>

          <Section>
            <InfoText fontSize="20px"> Temperatura </InfoText>
            <Image source={termometroIcon} />
          </Section>
          <InfoText fontSize="50px"> 4 °C </InfoText>

          <Section>
            <InfoText fontSize="20px"> Nível Bateria </InfoText>
            <ImageBat source={bateriaIcon} />
          </Section>
          <InfoText fontSize="50px"> 70% </InfoText>

          <InfoText fontSize="20px"> Histórico de Coolers </InfoText>
          <HistoryCard>
            <Text fontSize="20px"> Cooler 1 </Text>
          </HistoryCard>

          <HistoryCard>
            <Text fontSize="20px"> Cooler 2 </Text>
          </HistoryCard>
        </ScrollContainer>
      </Container>
    </>
  );
}

export default Info;
