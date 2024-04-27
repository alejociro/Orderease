import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRef, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import Toast from 'react-native-toast-message';
import { auth } from 'utils/firebase';

// @ts-ignore
const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const signUp = async () => {
    if (password !== confirmPassword) {
      Toast.show({
        type: 'error',
        text1: 'error',
        text2: 'no existe contraseña',
      });
      return;
    }

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate('Login');
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
    <View>
      <View>
        <View>
          <View>
            <Text>orderease</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>
                Crear cuenta
            </Text>
            <View>
              <View>
                <Text>
                  Correo electronico
                </Text>
                <TextInput
                  placeholder="name@company.com"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  returnKeyType="next"
                  onSubmitEditing={() => passwordInputRef.current?.focus()}
                  blurOnSubmit={false}
                />
              </View>
              <View>
                <Text>
                  Contraseña
                </Text>
                <TextInput
                  secureTextEntry
                  placeholder="••••••••"
                  value={password}
                  onChangeText={setPassword}
                  ref={passwordInputRef}
                  blurOnSubmit={false}
                />
              </View>
              <View>
                <Text>
                    Confirmar contraseña
                </Text>
                <TextInput
                  secureTextEntry
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  blurOnSubmit={false}
                />
              </View>
              <TouchableOpacity
                disabled={loading}
                onPress={signUp}>
                {loading ? (
                  <ActivityIndicator />
                ) : (
                  <Text>Crear cuenta</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default SignUp;