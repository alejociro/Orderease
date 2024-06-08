import React, {createContext, useRef, useState} from "react";
import {
    ScrollView,
    Text,
    TextInput,
    View,
    StyleSheet,
    Pressable, Animated, Dimensions, Button, TouchableWithoutFeedback,
} from "react-native";
import Location from "components/Location.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import Promotions from "components/Promotions.tsx";
import PrincipalItems from "components/PrincipalItems.tsx";
import Categories from "components/Categories.tsx";
import ShoppingCart from "components/ShoppingCart.tsx";
import CartProvider from "viewModels/CarContext.tsx";

// @ts-ignore
function MainContent({navigation, setSidebarVisible}) {
    return (<>
        <View
            style={{
                flexDirection: 'column',
                gap: 10,
            }}>
            <Location setSidebarVisible={setSidebarVisible} />
            <Text
                style={{
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
            <ScrollView style={{
                gap: 20
            }}>
                <Promotions />
                <View style={{
                    flexDirection: "column",
                    paddingHorizontal: 20,
                    paddingTop: 10,
                    gap: 20
                }}>
                    <PrincipalItems />
                    <Categories />
                </View>
            </ScrollView>
        </View>
    </>);
}

// @ts-ignore
export function MenuScreen({navigation}) {
    // @ts-ignore
    const [sidebarVisible, setSidebarVisible] = useState(false);

    return (
        <CartProvider>
            <TouchableWithoutFeedback  onPress={() => setSidebarVisible(false)}>
                <View style={styles.container}>
                    <View style={styles.mainContent} >
                        <MainContent navigation={navigation} setSidebarVisible={setSidebarVisible} />
                    </View>
                    <TouchableWithoutFeedback>
                        <ShoppingCart setSidebarVisible={setSidebarVisible} sidebarVisible={sidebarVisible} />
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </CartProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    mainContent: {
        flex: 1,
        backgroundColor: '#fff',
    },
    sidebar: {
        position: 'absolute',
        width: '100%',
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: '#f0f0f0',
        zIndex: 2
    },
});
export default MenuScreen;