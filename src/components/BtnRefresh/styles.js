import styled from 'styled-components/native';

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
  width: 30px;
  height: 30px;
  margin-left: 10px;
`;

export const ButtonColumn = styled.View`
  flex-direction: column;
`;
