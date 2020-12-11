import React, { useCallback, useRef } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import InputTx from '../../components/InputTx';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Title,
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
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSignIn = useCallback((data: object) => {
    console.log(data);
  }, []);
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
            <Form ref={formRef} onSubmit={handleSignIn}>
              <InputTx name="textemail" placeholder="E-mail" />
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
              <InputTx name="textemail" placeholder="Senha" />
              <Input
                ref={passwordInputRef}
                secureTextEntry
                name="password"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />

              <ForgotPassword onPress={() => { }}>
                <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
              </ForgotPassword>

              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}>
                LOGAR
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>



      <CreateAccountButton onPress={() => { navigation.navigate('SignUp') }}>
        <CreateAccountButtonText>
          Criar uma conta!
        </CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};
export default SignIn;
