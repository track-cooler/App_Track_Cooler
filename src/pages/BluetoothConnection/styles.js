import styled from 'styled-components/native';

//Scroll View
export const ScrollContainer = styled.ScrollView.attrs({
  front: true,
  contentContainerStyle: {paddingUp: 10, paddingDown: 30},
  showsFrontScrollIndicator: false,
})``;

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  background-color: #eff1f9;
`;

//Imagem
export const Image = styled.Image`
  width: 50px;
  height: 50px;
  padding: 4%;
  margin-left: 10px;
`;

// Title
export const Title = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 30px;
`;

// Text
export const Text = styled.Text`
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const InfoText = styled.Text`
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
  margin-top: 10px;
`;
