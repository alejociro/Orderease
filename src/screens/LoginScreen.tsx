import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRef, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
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
      navigation.navigate('Main');
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
            <Text>Orderease</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>
              Ingresa en tu cuenta
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
              <TouchableOpacity
                disabled={loading}
                onPress={signIn}>
                {loading ? (
                  <ActivityIndicator />
                ) : (
                  <Text> Ingresar</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}>
                <Text>No registrado</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Login;