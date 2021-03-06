import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #000;
  margin: 24px 0 5px;
`;

export const Title2 = styled.Text`
  font-size: 18px;
  color: #fff;
  margin: 0px 0 15px 3px;
  text-align: center;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #006600;
  font-size: 18px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  border-top-width: 1px;
  border-color: #fff;
  padding: 16px 0 ${16 + getBottomSpace()}px; /*para quando for ios dar um espaco do botao */

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: #006600;
  font-size: 18px;
  margin-left: 16px;
`;
