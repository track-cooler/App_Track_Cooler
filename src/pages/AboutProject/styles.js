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

export const ImageGit = styled.Image`
  margin: 36%;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 60px;
  width: 95px;
  height: 83px;
  padding: 10%;
`;

// Title
export const Title = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 25px;
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

export const TextGit = styled.Text`
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 10px;
`;
