import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Input = styled.TextInput`
  font-size: ${(props) => props.fontSize};
  margin-top: 10px;
  padding: 10px;
  width: 300px;
  background-color: #fff;
  font-weight: bold;
  border-radius: 3px;
`;

// button
export const Button = styled.TouchableOpacity`
  width: 300px;
  height: 42px;
  background-color: ${(props) => props.btnColor};
  margin-top: 10px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: ${(props) => props.fontSize};
  color: #fff;
  font-weight: bold;
  align-self: center;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-color: #ccc;
  border-bottom-width: 1px;
  margin-top: 25px;
  margin-bottom: 10px;
  height: 50px;
`;

export const InfoText = styled.Text`
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
`;
