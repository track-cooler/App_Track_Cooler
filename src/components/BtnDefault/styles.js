import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 0px 2% 0px 2%;
  padding: 10px 0px 0px 0px;
  width: ${(props) => props.btnWidth};
  height: ${(props) => props.btnHeight};
  border-radius: 10px;
  background-color: ${(props) => props.btnColor};
`;

export const Image = styled.Image`
  width: 45px;
  height: 40px;
  padding: 7%;
`;

export const Title = styled.Text`
  width: 50%;
  font-family: montserratMedium;
  font-weight: bold;
  font-size: ${(props) => props.size};
  text-align: left;
  color: ${(props) => props.textColor};
`;
