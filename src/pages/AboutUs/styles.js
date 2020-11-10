import styled from 'styled-components/native';

//Scroll View
export const ScrollContainer = styled.ScrollView.attrs({
  front: true,
  contentContainerStyle: { paddingUp: 10, paddingDown: 30},
  showsFrontScrollIndicator: false,
})``;

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  background-color: #eff1f9;
`;

//Imagem
export const Image = styled.Image`
  width: 45px;
  height: 40px;
  padding: 4%;
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
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;
