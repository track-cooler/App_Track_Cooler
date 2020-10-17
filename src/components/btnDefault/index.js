import React from 'react';

import {ItemView, Title, Image} from './styles';

const SmallItem = ({btnColor, textColor, fontSize, text, icon, onPress}) => (
  <ItemView onPress={onPress} btnColor={btnColor}>
    <Title textColor={textColor} size={fontSize}>
      {text}
    </Title>
    <Image source={icon} />
  </ItemView>
);

export default SmallItem;
