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

export const ImageBat = styled.Image`
  width: 45px;
  height: 70px;
  padding: 1%;
`;

// Title
export const Title = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  borderBottomColor: #ccc;
  borderBottomWidth: 1px;
  margin-top: 25px;
  margin-bottom: 10px;
  height: 50px;
`;

// Text
export const Text = styled.Text`
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  text-align: left;
`;

export const InfoText = styled.Text`
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
`;

// Buttons css
export const ButtonsRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

// Cards
export const HistoryCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #FFF;
  border-radius: 8px;
  margin-top: 10px;
`;

export const Date = styled.View`
  width: 350;
  background: #FFF;
`;

//Line
export const Line = styled.View`
  flexDirection: row;
  borderBottomColor: #ccc;
  borderBottomWidth: 1;
`;
