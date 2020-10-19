import React from 'react';

import {Button, Image, TextName, ButtonColumn} from './styles';

const SmallBtn = ({
  btnColor,
  fontSize,
  text,
  icon,
  btnWidth,
  btnHeight,
  onPress,
}) => (
  <ButtonColumn>
    <Button
      onPress={onPress}
      btnColor={btnColor}
      btnHeight={btnHeight}
      btnWidth={btnWidth}>
      <Image source={icon} />
    </Button>
    <TextName fontSize={fontSize}>{text}</TextName>
  </ButtonColumn>
);

export default SmallBtn;
