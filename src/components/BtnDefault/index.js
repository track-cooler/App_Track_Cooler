import React from 'react';

import {Button, Title, Image} from './styles';

const BtnDefault = ({
  btnColor,
  textColor,
  fontSize,
  text,
  icon,
  btnWidth,
  btnHeight,
  onPress,
}) => (
  <Button
    onPress={onPress}
    btnColor={btnColor}
    btnHeight={btnHeight}
    btnWidth={btnWidth}>
    <Title textColor={textColor} size={fontSize}>
      {text}
    </Title>
    <Image source={icon} />
  </Button>
);

export default BtnDefault;
