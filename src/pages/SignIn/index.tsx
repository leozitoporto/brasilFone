import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';

import Input from '../../components/Input';
import InputTx from '../../components/InputTx';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Title,
  Title2,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';


interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />
            <Title>.</Title>
            <InputTx name="textemail" placeholder="E-mail" />
            <Input name="email" />
            <InputTx name="textemail" placeholder="Senha" />
            <Input name="password" />

            <ForgotPassword onPress={() => { }}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>

            <Button>LOGAR</Button>

          </Container>
        </ScrollView>
      </KeyboardAvoidingView>



      <CreateAccountButton onPress={() => { }}>
        <CreateAccountButtonText>
          Criar uma conta!
        </CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};
export default SignIn;
