import React from 'react';
import {FloatButton, Image} from './styles';

const FloatActionButton = ({icon, onPress}) => (
  <FloatButton onPress={onPress}>
    <Image source={icon} />
  </FloatButton>
);

export default FloatActionButton;
