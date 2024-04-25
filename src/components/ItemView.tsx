import React, {useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Modal,
    Alert,
    Pressable,
    TouchableWithoutFeedback,
    Image,
    Dimensions
} from "react-native"

export const WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
    centeredViewModal: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(4,1,1,0.35)',

    },
    modalView: {
        position: 'relative',
        width: '100%',
        height: '90%',
        backgroundColor: 'white',
        borderTopStartRadius:26,
        borderTopEndRadius: 26,
        alignItems: 'center',
        shadowColor: '#00000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4,
        elevation: 5,
        overflow: 'hidden'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    imageBackground: {
        position: 'absolute',
        width: 260,
        height: 260,
        left: '20%',
        top: -80,
        backgroundColor: '#F8F8F8',
        shadowColor: 'black',
        elevation: 5,
        borderRadius: 150,
        zIndex:-1,
    },
    imageBackgroundExt: {
        width: 454,
        height: 454,
        top: -250,
        left: '-10%',
        position: 'absolute',
        backgroundColor: '#000000',
        shadowColor: '#000000',
        elevation: 10,
        borderRadius: 360,
        zIndex:-3,
    }
})

// @ts-ignore
const ItemView = ({ modalVisible, setModalVisible}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.centeredViewModal}>
                    <TouchableWithoutFeedback>
                        <View style={styles.modalView}>
                            <View style={{
                                height: 4,
                                marginBottom: 8,
                                width: '30%',
                                borderRadius: 100,
                                backgroundColor: '#C0C0CF',
                                margin: 15,
                            }} />
                            <View style={{ position: 'relative', width: '100%', padding: 35 }}>
                                <Image style={styles.imageBackground}></Image>
                                <Image style={styles.imageBackgroundExt}></Image>
                                <Text style={styles.modalText}>Hello World!</Text>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>Hide Modal</Text>
                                </Pressable>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default ItemView