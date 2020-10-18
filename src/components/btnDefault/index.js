import React from 'react';

import { ItemView, Title, Image } from './styles';

const BtnDefault = ({ btnColor, textColor, fontSize, text, icon, btnWidth, btnHeight, onPress }) => (
  <ItemView onPress={onPress} btnColor={btnColor} btnHeight={btnHeight} btnWidth={btnWidth}>
    <Title textColor={textColor} size={fontSize}>
      {text}
    </Title>
    <Image source={icon} />
  </ItemView>
);

export default BtnDefault;
