import React, { useState, useEffect } from "react";
import {Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";
import { CameraView, Camera } from "expo-camera";
import {useTable} from "viewModels/TableContext.tsx";

const fetchContent = async (url: string) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error fetching content:', error);
    }
};

// @ts-ignore
export default function Scan({navigation}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    // @ts-ignore
    const { setSelectedTable } = useTable();

    useEffect(() => {
        const getCameraPermissions = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            // @ts-ignore
            setHasPermission("granted" === status);
        };

        getCameraPermissions();
    }, []);

    // @ts-ignore
    const handleBarCodeScanned = async ({ type, data }) => {
        setScanned(true);
        let text = await fetchContent(data);
        setSelectedTable(text);
        setScanned(false);
        navigation.navigate('Menu')
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <CameraView
                onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
                barcodeScannerSettings={{
                    barcodeTypes: ["qr"],
                }}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    height: "100%"
                }}
            />
            <Image
                style={{
                    width: 300,
                    height: 300,
                }}
                source={require('./../imgs/qr.png')}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
});