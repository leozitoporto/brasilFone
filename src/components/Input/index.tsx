import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  containerStyle?: {};
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => (
  <Container>
    <TextInput placeholderTextColor="#666360" {...rest} />
  </Container>
);

export default Input;