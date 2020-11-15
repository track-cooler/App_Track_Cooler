import styled from 'styled-components/native';

export const CenteredView = styled.View`'
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

export const ModalView = styled.View`
  display: flex;
  padding: 15px;
  width: 88%;
  margin: 20px;
  background-color: #218380;
  border-radius: 20px;
  align-items: center;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2;
  }
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

export const OpenButton = styled.TouchableHighlight`
  background-color: #77b6ea;
  border-radius: 20px;
  padding: 10px;
  elevation: 2;
  width: 122px;
  display: flex;
`;

export const TextStyle = styled.Text`
  font-weight: bold;
  text-align: center;
  font-family: Montserrat;
  font-style: normal;
  font-size: 15px;
  color: #ffffff;
`;

export const ModalText = styled.Text`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  color: #ffffff;
  margin-bottom: 15px;
  text-align: center;
`;
