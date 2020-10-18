import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  background-color: #eff1f9;
`;

export const Image = styled.Image`
  width: 45px;
  height: 40px;
  padding: 7%;
`;

// Text
export const TextName = styled.Text`
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  text-align: left;
  margin-bottom: 50px;
`;

export const InfoText = styled.Text`
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  text-align: left;
  margin-top: 50px;
  margin-bottom: 20px;
`;

// Buttons css
export const ButtonsRow = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
`;

export const ButtonView = styled.View`
  margin-left: 30px;
`;
