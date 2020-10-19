import styled from 'styled-components';

export const Button = styled.TouchableOpacity`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px 0px 0px 20px;
  border-radius: 10px;
  background-color: ${(props) => props.btnColor};
  width: ${(props) => props.btnWidth};
  height: ${(props) => props.btnHeight};
`;

export const Image = styled.Image`
  width: 55px;
  height: 50px;
  margin-left: 10px;
`;

// Text
export const TextName = styled.Text`
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  text-align: left;
  margin-bottom: 50px;
`;

export const ButtonColumn = styled.View`
  flex-direction: column;
`;
