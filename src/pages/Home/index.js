import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
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
  // states
  const [userName, setUserName] = useState('');
  const [buttonWidth, setButtonWidth] = useState('46%');
  const [fontSize, setFontSize] = useState('18px');
  const [btnFirstColor, setBtnFirstColor] = useState('#A9BCD0');
  const [btnSecondColor, setBtnSecondColor] = useState('#218380');

  useEffect(() => {
    loadUserName();
    handleFontSize();
    handleChangeColor();
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
              onPress={() => console.log('Informações Cooler')}
            />

            <BtnDefault
              text="Configurações"
              textColor="#fff"
              fontSize={fontSize}
              btnColor={btnSecondColor}
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
              btnColor={btnSecondColor}
              btnHeight="72px"
              btnWidth={buttonWidth}
              icon={bluetoothIcon}
              onPress={() => console.log('Conectar Cooler')}
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
              onPress={() => console.log('Sobre Nós')}
            />

            <ButtonView>
              <SmallBtn
                text="Sobre o projeto"
                btnColor={btnFirstColor}
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
