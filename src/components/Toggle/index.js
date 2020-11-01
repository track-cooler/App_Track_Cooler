import React from "react";
import { Toggle, Title, Container, Image } from "./styles";

const ToggleDefault = ({ text, fontSize, value, icon, onChange }) => (
  <>
  <Container>
    <Image source={icon} />
    <Title size={fontSize}>
      {text}
    </Title>
    <Toggle value={value} onChange={onChange}></Toggle>
  </Container>
  </>
)

export default ToggleDefault;