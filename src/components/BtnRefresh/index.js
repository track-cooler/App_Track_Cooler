import React from 'react';

import {Button, Image, TextName, ButtonColumn} from './styles';

const BtnRefresh = ({
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
  </ButtonColumn>
);

export default BtnRefresh;
