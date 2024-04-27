import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import {View, Text, TextInput, Image, TouchableOpacity, ActivityIndicator, Pressable} from 'react-native';
import Toast from 'react-native-toast-message';
import { auth } from '../utils/firebase';

// @ts-ignore
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Menu');
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: 'ocurrio un error',
        text2: error.code === 'auth/invalid-credential' ? 'credencial invalida' : error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const passwordInputRef = useRef<TextInput>(null);

  return (
      <View style={{
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 30,
        marginTop: 100,
        paddingBottom: 150,
        paddingHorizontal: 20,
      }}>
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{
            fontFamily: 'Mulish',
            fontWeight: '500',
            fontSize: 26,
            color: '#32324D'
          }}>Bienvenido 😁</Text>
          <Text style={{
            fontFamily: 'Mulish',
            fontWeight: '500',
            fontSize: 16,
            color: '#666687'
          }}>Inicia sesión o registrate</Text>
        </View>
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', gap:10 }}>
          <TextInput
              placeholder="name@company.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => passwordInputRef.current?.focus()}
              blurOnSubmit={false}
              style={{
                borderWidth: 1,
                padding: 20,
                height: 54,
                borderRadius: 8,
                width: '100%',
                backgroundColor: "white",
                borderStyle: 'solid',
                justifyContent: "flex-start",
                borderColor: 'rgba(165,165,186,0.2)',
              }}
          />
          <TextInput
              secureTextEntry
              placeholder="Contraseña"
              value={password}
              onChangeText={setPassword}
              ref={passwordInputRef}
              blurOnSubmit={false}
              style={{
                borderWidth: 1,
                padding: 20,
                height: 54,
                borderRadius: 8,
                width: '100%',
                backgroundColor: "white",
                borderStyle: 'solid',
                justifyContent: "flex-start",
                borderColor: 'rgba(165,165,186,0.2)',
              }}
          />
          <Pressable style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
            gap: 8,
            width: '100%',
            height: 54,
            backgroundColor: '#1F985E',
            borderRadius: 16,
          }}
             disabled={loading}
             onPress={signIn}
          >
            {loading ? (
                <ActivityIndicator color='white' size={16} />
            ) : (
                <Text style={{
                  fontFamily: 'Mulish',
                  fontWeight: '600',
                  fontSize: 16,
                  color: '#FFFFFF'
                }}>Inicia sesión</Text>
            )}
          </Pressable>
        </View>
        <View style={{
          width: "100%",
          gap: 10,
          margin: 0,
          height: 16,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <View style={{
            flexDirection: 'column',
            height: 1,
            width: '40%',
            backgroundColor: '#2C2E2C45'
          }}></View>
          <Text>ó</Text>
          <View style={{
            flexDirection: 'row',
            height: 1,
            width: '40%',
            backgroundColor: '#2C2E2C45'
          }}></View>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'space-between', padding: 16, gap: 10, width: '100%' }}>
          <Pressable style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            padding: 16,
            gap: 8
          }} onPress={() => navigation.navigate('SignUp')}>
            <Text style={{
              fontFamily: 'Mulish',
              fontWeight: '600',
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 16,
              color: '#1F985E'
            }}>
              ¿Aun no tienes cuenta? Registrate
            </Text>
          </Pressable>
        </View>
        <Pressable style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          padding: 16,
          gap: 8
        }} onPress={() => navigation.navigate('Menu')}>
          <Text style={{
            fontFamily: 'Mulish',
            fontWeight: '600',
            alignSelf: 'center',
            textAlign: 'center',
            fontSize: 16,
            color: '#1F985E'
          }}>
            Hacer mi pedido
          </Text>
        </Pressable>
      </View>
  );
};
export default Login;