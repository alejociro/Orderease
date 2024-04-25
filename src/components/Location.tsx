import React from 'react';
import {Text, View} from 'react-native';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faLocationDot, faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const Location = () => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 20,
            height: 44,
            paddingTop: 20,
            paddingHorizontal: 20,
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: "center",
                alignItems: "center",
                gap: 3,
            }}>
                <FontAwesomeIcon style={{
                    color: '#a1af9e',
                    margin: 10,
                }} icon={faLocationDot} />
                <Text
                    style={{
                        fontFamily: 'Mulish',
                        fontWeight: "600",
                        fontSize: 16,
                        lineHeight: 22,
                        color: '#a1af9e',
                    }}
                >
                    La casa de la abuela
                </Text>
            </View>
            <FontAwesomeIcon
                icon={faShoppingCart}
                size={20}
                color='#a1af9e'
                secondaryColor='#a1af9e'
                secondaryOpacity={0}
            />
        </View>
    );
};

export default Location;