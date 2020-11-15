/*eslint-disable */

import {Modal} from 'react-native';
import React from 'react';

import {
  CenteredView,
  ModalView,
  OpenButton,
  TextStyle,
  ModalText,
} from './styles';

const AlertModal = ({onPress, isVisible, text}) => (
  <>
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <CenteredView>
        <ModalView>
          <ModalText>{text}</ModalText>

          <OpenButton onPress={onPress}>
            <TextStyle> OK </TextStyle>
          </OpenButton>
        </ModalView>
      </CenteredView>
    </Modal>
  </>
);

export default AlertModal;
