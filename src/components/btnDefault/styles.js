import styled from 'styled-components';

export const ItemView = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0px 10px 0px 20px;
  width: 70px;
  height: 70px;
  border-radius: 10px;
  background-color: ${(props) => props.btnColor};
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
`;

export const Title = styled.Text`
  font-family: montserratMedium;
  font-size: ${(props) => props.size};
  text-align: center;
  color: ${(props) => props.textColor};
`;
