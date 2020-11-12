import styled from 'styled-components/native';

export const AlertContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 15px 22px;
  width: 88%;
  border-radius: 10px;
  background: #218380;
`;

export const ConfirmAlertButton = styled.TouchableOpacity`
  border-radius: 5px;
  background: #77B6EA;
  padding: 8px 0px;
  width: 122px;
  display: flex;
  align-items: center;
`

export const ConfirmAlertText = styled.Text`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #FFFFFF;
`

export const AlertTitle = styled.Text`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  color: #FFFFFF;
`

export const AlertMessage = styled.Text`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
  margin: 32px 0px;
`

export const AlertMessageBox = styled.View`
  width: 100%;
`

export const AlertBackdrop = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.32);
  z-index: 100;
`
