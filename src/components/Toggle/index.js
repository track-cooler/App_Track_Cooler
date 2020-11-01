import React from "react";

import { Toggle, Title } from "./styles";

const ToggleDefault = ({ text, fontSize, value, onChange }) => (
  <>
    <Toggle value={value} onChange={onChange}></Toggle>
    <Title size={fontSize}>
      {text}
    </Title>
  </>
)

export default ToggleDefault;