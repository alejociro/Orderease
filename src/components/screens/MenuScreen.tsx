import React from "react";
import {Text, TextInput, View} from "react-native";
import Location from "@components/Location.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import Promotions from "components/Promotions.tsx";

export function MenuScreen() {
    return (
        <View
            style={{
                flexDirection: 'column',
                gap: 10,
            }}>
            <Location />
            <Text
                style={{
                    fontFamily: 'Mulish',
                    fontWeight: 500,
                    fontSize: 22,
                    color: '#32324D',
                    paddingHorizontal: 20,
                    paddingVertical: 8,
                }}>
                Qué deseas pedir hoy?
            </Text>
            <View style={{
                flexDirection: 'row',
                alignItems: "center",
                backgroundColor: "white",
                paddingHorizontal: 20,
                borderRadius: 8,
                gap: 20,
                marginHorizontal: 20,
                padding: 8
            }}>
                <FontAwesomeIcon color="#a1af9e" icon={faSearch} />
                <TextInput
                    style={{
                        backgroundColor: "white",
                        color: "#32324D"
                    }}
                    placeholder="Buscar"
                />
            </View>
            <Promotions></Promotions>
            <View style={{
                alignItems: "flex-start",
                paddingHorizontal: 20,
                paddingTop: 10,
                gap: 20
            }}>
                <Text style={{
                    fontFamily: 'Mulish',
                    fontWeight: '600',
                    fontSize: 18,
                    color: '#525950',
                }}>
                    Los más pedidos
                </Text>
            </View>
        </View>
    );
}
export default MenuScreen;