import React, {createContext, useRef, useState} from "react";
import {
    ScrollView,
    Text,
    TextInput,
    View,
    DrawerLayoutAndroid, Image, Button, Pressable,
} from "react-native";

// @ts-ignore
export function HomeScreen({navigation}) {
    return (
        <ScrollView>
            <View
                style={{
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 10,
                    height: '100%',
                    paddingVertical: 20
                }}>
                <Image source={require('./../imgs/home.png')}></Image>
                <View style={{ alignItems: 'center', justifyContent: 'space-between', padding: 16, gap: 10 }}>
                    <Text style={{
                        fontWeight: '500',
                        fontSize: 26,
                        color: '#2c3e2e'
                    }}>
                        Una experiencia completa
                    </Text>
                    <Text style={{
                        fontWeight: '500',
                        fontSize: 16,
                        color: '#9ea89b'
                    }}>Pide tu orden directamente desde tu celular</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'space-between', padding: 16, paddingHorizontal: 40, gap: 10, width: '100%' }}>
                    <Pressable style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        padding: 16,
                        gap: 8
                    }} onPress={() => navigation.navigate('SingUp')}>
                        <Text style={{
                            fontWeight: '600',
                            alignSelf: 'center',
                            textAlign: 'center',
                            fontSize: 16,
                            color: '#1F985E'
                        }}>
                            Registrate para obtener
                            descuentos especiales
                        </Text>
                    </Pressable>
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
                    }} onPress={() => navigation.navigate('Menu')}>
                        <Text style={{
                            fontWeight: '600',
                            fontSize: 16,
                            color: '#FFFFFF'
                        }}>Hacer mi pedido</Text>
                    </Pressable>
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
                    }} onPress={() => navigation.navigate('QR')}>
                        <Text style={{
                            fontWeight: '600',
                            fontSize: 16,
                            color: '#FFFFFF'
                        }}>Leer codigo QR</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
}
export default HomeScreen;