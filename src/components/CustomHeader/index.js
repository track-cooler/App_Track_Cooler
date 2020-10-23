/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {withNavigation} from '@react-navigation/compat';

import {Image, ButtonView} from './styles';

import {Header, Button} from 'react-native-elements';

import Icon from 'react-native-vector-icons/MaterialIcons';

import appIcon from '../../assets/appIcon.png';

const CustomHeader = ({navigation, isHome}) => {
  return (
    <>
      <Header
        placement="right"
        leftComponent={
          <ButtonView>
            <Button
              type="clear"
              icon={
                isHome ? null : (
                  <Icon name="arrow-back-ios" size={40} color="white" />
                )
              }
              onPress={() => navigation.replace('Home')}
            />
            <Image source={appIcon} />
          </ButtonView>
        }
        centerComponent={{
          text: 'Track Cooler',
          style: {
            width: '100%',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 36,
          },
        }}
        rightContainerStyle={{flex: 0}}
        containerStyle={{
          backgroundColor: '#373F51',
          justifyContent: 'space-evenly',
        }}
      />
    </>
  );
};

export default withNavigation(CustomHeader);
