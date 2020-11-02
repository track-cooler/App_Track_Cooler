import React, {useState, useEffect} from 'react';
import DatePicker from 'react-native-datepicker';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import CustomHeader from '~/components/CustomHeader';
import BtnDefault from '~/components/BtnDefault';
import BtnRefresh from '~/components/BtnRefresh';

// Styles
import {Container, ButtonsRow, Text, Title, Section, InfoText, Image, HistoryCard, ScrollContainer, ImageBat} from './styles';

// Icons
import refreshIcon from '../../assets/refresh.png';
import coolerIcon from '../../assets/cooler.png';
import termometroIcon from '../../assets/temperature.png';
import bateriaIcon from '../../assets/bateria.png';


function Info({navigation}) {

  const buttonFontSize = '10px';
  const buttonWidth = '20%';

//Alert
  const alertInfo = async () => {
    try {
      Alert.alert('Sucesso!', 'Dados atualizados com sucesso!');
    } catch (e) {
      Alert.alert(e);
    }
  };

//  state = {
//   data: ''
//  }
//              <DatePicker
//                format="DD/MM/YYYY"
//                date={this.state.data}
//              />

  return (
    <>
      <CustomHeader />
      <Container>
        <ScrollContainer>

          <Title>
            <Image source={coolerIcon} />
            <Text fontSize="26px"> Informações  Cooler</Text>
            <ButtonsRow>
              <BtnRefresh
                btnColor="#A9BCD0"
                fontSize={buttonFontSize}
                btnHeight="50px"
                btnWidth="50px"
                icon={refreshIcon}
                onPress={alertInfo}
              />
            </ButtonsRow>
          </Title>

          <Section>
            <InfoText fontSize="20px"> Status: </InfoText>
          </Section>
          <InfoText fontSize="30px"> Conectado </InfoText>

          <Section>
            <InfoText fontSize="20px"> Temperatura </InfoText>
            <Image source={termometroIcon} />
          </Section>
          <InfoText fontSize="50px"> 4 °C </InfoText>

          <Section>
            <InfoText fontSize="20px"> Nível Bateria </InfoText>
            <ImageBat  source={bateriaIcon} />
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
