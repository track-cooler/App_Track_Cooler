import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  margin-top: 10px;
  padding: 10px;
  width: 90%;
`;

export const Image = styled.Image`
  width: 45px;
  height: 40px;
  padding: 7%;
`;

export const Toggle = styled.Switch``;

export const Title = styled.Text`
  /* width: 50%; */
  font-family: montserratMedium;
  font-weight: bold;
  font-size: ${(props) => props.size};
  text-align: left;
`;