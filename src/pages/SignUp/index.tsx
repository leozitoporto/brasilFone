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


import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

//import logoImg from '../../assets/logo.png';

interface SignUpFormData {
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  return (
    <Container />
  )
};
export default SignUp;
