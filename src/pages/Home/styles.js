import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Label = styled.Text`
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  text-align: left;
  width: 100%;
`;

export const Image = styled.Image`
  width: 45px;
  height: 40px;
  padding: 7%;
`;