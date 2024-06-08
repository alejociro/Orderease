import React, {createContext, useRef, useState} from "react";
import {
    ScrollView,
    Text,
    TextInput,
    View,
    DrawerLayoutAndroid, Image, Button, Pressable,
} from "react-native";
import Scan from "./Scan.tsx"

// @ts-ignore
export function QRScreen({navigation}) {
    return (
        <Scan navigation={navigation}/>
    );
}
export default QRScreen;