import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {Container} from './styles';

import BtnDefault from '../../components/btnDefault';

import cooler from '../../assets/cooler.png';

function Home() {
  return (
    <Container>
      <BtnDefault
        text="Teste"
        textColor="#fff"
        fontSize="20px"
        btnColor="#000"
        icon={cooler}
        onPress={() => console.log('Aqui')}
      />
      <TouchableOpacity>
        <Text>Ola</Text>
      </TouchableOpacity>
    </Container>
  );
}

export default Home;
