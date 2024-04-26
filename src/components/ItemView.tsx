import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    TouchableWithoutFeedback,
    Image,
    Dimensions, TextInput, KeyboardAvoidingView, Platform, SafeAreaView, Keyboard, ScrollView, Button
} from "react-native"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faMinus, faPlus, faStar} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-native-modal";
import {useHeaderHeight} from "react-native-screens/native-stack";

export const WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
    modalView: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        height: '90%',
        backgroundColor: 'white',
        borderTopStartRadius:26,
        borderTopEndRadius: 26,
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
        backgroundColor: '#F4F4F4',
        shadowColor: '#A5A5BA',
        borderRadius: 150,
        zIndex:-1,
    },
    imageBackgroundExt: {
        width: 454,
        height: 454,
        top: -260,
        left: '-10%',
        position: 'absolute',
        backgroundColor: 'white',
        shadowColor: '#A5A5BA',
        elevation: 10,
        borderRadius: 360,
        zIndex:-3,
    },
    image: {
        width: 170,
        height: 170,
        resizeMode: 'cover',
        borderRadius: 100,
    },
    header: {
        fontFamily: 'Mulish',
        fontWeight: "700",
        fontSize: 20,
        display: 'flex',
        alignItems: 'center',
        color: "#1F985E",
    },
    price: {
        fontFamily: 'Mulish',
        display: 'flex',
        alignItems: 'center',
        color: "#1F985E",
        fontSize: 24,
        fontWeight: "bold",
    },
    description: {
        fontFamily: 'Mulish',
        display: 'flex',
        alignItems: 'center',
        color: "#9aa198",
        fontSize: 14,
        fontWeight: "normal",
    },
    priceIco: {
        width: 10,
        fontFamily: 'Mulish',
        display: 'flex',
        alignItems: 'flex-start',
        color: "#1F985E",
        fontSize: 12,
        fontWeight: "bold",
    },
    score: {
        position: 'absolute',
        top: "5%",
        right: "30%",
        flexDirection: 'row',
        gap: 8,
        paddingHorizontal: 8,
        alignItems: 'center',
        height: 20,
        width: 40,
        backgroundColor: 'white',
        borderRadius: 100,
        shadowColor: 'black',
        elevation: 1,
        zIndex: 100,
    },
    scoreText: {
        fontFamily: 'Mulish',
        fontWeight: '600',
        fontSize: 14,
        color: '#525950FF',
    },
    bottomPrimary: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        gap: 8,
        width: 200,
        height: 54,
        backgroundColor: '#1F985E',
        borderRadius: 16,
    },
    counter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        gap: 14,
        width: 117,
        height: 54,
        backgroundColor: '#F6F6F9',
        borderRadius: 16,
    },
})

// @ts-ignore
const ItemView = ({ modalVisible, setModalVisible, item, setCurrentItem}) => {
    return (
        <Modal
            animationIn="slideInUp"
            swipeDirection="down"
            avoidKeyboard={true}
            hasBackdrop={true}
            backdropColor={'rgba(4,1,1,0.35)'}
            onBackdropPress={() => setModalVisible(false)}
            isVisible={modalVisible}
            style={{margin: 0}}>
            <View style={{display: 'flex', height: '100%', justifyContent: 'flex-end'}}>
                <View style={styles.modalView}>
                    <View style={{
                        height: 4,
                        marginBottom: 20,
                        width: '30%',
                        borderRadius: 100,
                        backgroundColor: '#C0C0CF',
                        margin: 15,
                    }} />
                    <View style={{
                        position: 'relative',
                        width: '100%',
                        justifyContent: 'space-between',
                        height: '100%'
                    }}>
                        <View style={styles.imageBackground}></View>
                        <View style={styles.imageBackgroundExt}></View>
                        {
                            item?.score
                                ? (
                                    <View style={styles.score}>
                                        <FontAwesomeIcon size={12} color='#FFB01D' icon={faStar} />
                                        <Text style={styles.scoreText}>{item?.score}</Text>
                                    </View>
                                )
                                : ''
                        }
                        <View style={{ alignItems: 'center', width: '100%', height: '100%', flexDirection: 'column',  justifyContent: 'space-between', }}>
                            <Image
                                source={{uri: item?.imgUrl}}
                                style={styles.image}
                            />
                            <View style={{
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: '100%',
                                justifyContent: 'space-between',
                                height: '55%',
                                paddingHorizontal: 35,
                            }}>
                                <ScrollView>
                                    <View style={{ gap: 20 }}>
                                        <View style={{
                                            paddingTop: 40,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            width: '100%',
                                            justifyContent: 'space-between',
                                        }}>
                                            <Text style={styles.header}>{item?.title}</Text>
                                            <View style={{display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'flex-start'}}>
                                                <Text style={styles.priceIco}>$</Text>
                                                <Text style={styles.price}>{item?.price ?? ''}</Text>
                                            </View>
                                        </View>
                                        <Text style={styles.description}>{item?.description}</Text>
                                        <Text style={{
                                            fontFamily: 'Mulish',
                                            fontWeight: '600',
                                            fontSize: 18,
                                            color: '#525950',
                                            width: '100%'
                                        }}>
                                            Añade una solicitud
                                        </Text>
                                        <TextInput
                                            style={{
                                                borderWidth: 1,
                                                paddingHorizontal: 20,
                                                borderRadius: 8,
                                                gap: 20,
                                                backgroundColor: "white",
                                                borderStyle: 'solid',
                                                height: 150,
                                                justifyContent: "flex-start",
                                                borderColor: 'rgba(165,165,186,0.2)',
                                            }}
                                            multiline={true}
                                            numberOfLines={4}
                                            placeholder='Ejemplo: Por favor, no agregue cebolla'
                                        />
                                    </View>
                                </ScrollView>
                            </View>
                            <View style={{
                                elevation: 10,
                                shadowColor: '#0C1A4B',
                                backgroundColor: 'white',
                                justifyContent: 'center',
                                alignItems: 'stretch',
                                height: 70,
                                padding: 10,
                                width: '100%',
                                gap: 10,
                                flexDirection: 'row',
                            }}>
                                <Pressable style={styles.counter}>
                                    <FontAwesomeIcon color='#1F985E' icon={faMinus}></FontAwesomeIcon>
                                    <Text>0</Text>
                                    <FontAwesomeIcon color='#1F985E' icon={faPlus}></FontAwesomeIcon>
                                </Pressable>
                                <Pressable style={styles.bottomPrimary}>
                                    <Text style={{
                                        fontFamily: 'Mulish',
                                        fontWeight: '600',
                                        fontSize: 16,
                                        color: '#FFFFFF'
                                    }}>Añadir al carrito</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ItemView