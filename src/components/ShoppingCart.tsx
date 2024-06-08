import React, {useRef, useState} from 'react';
import {
    Text,
    StyleSheet,
    View, Pressable, Button, FlatList, Image, ScrollView,
} from 'react-native';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faArrowLeft, faMinus, faPlus, faStar, faTrash, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {useCart} from "viewModels/CarContext.tsx";
import Modal from "react-native-modal";
import { ref, set } from 'firebase/database';
import { db } from '../utils/firebase'; 


const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    cartTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    container: {
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        height: '100%',
        paddingHorizontal: 24,
        paddingVertical: 24,
        backgroundColor: '#F8F8F8',
    },
    scoreText: {
        fontWeight: '600',
        fontSize: 14,
        color: '#525950FF',
    },
    card: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        paddingHorizontal: 12,
        paddingVertical: 24,
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 16,
        gap: 14,
        height: 120,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0
    },
    backBottom: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        width: 44,
        height: 44,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
    },
    paragraph: {
        padding: 16,
        fontSize: 15,
        textAlign: 'center',
    },
    smallText: {
        fontWeight: '500',
        fontSize: 14,
        color: '#8E8EA9'
    },
    title: {
        fontWeight: '500',
        fontSize: 18,
        color: '#32324D'
    },
    image: {
        width: 80,
        resizeMode: 'cover',
        height: 80,
        borderRadius: 100,
    },
    header: {
        fontWeight: "600",
        fontSize: 18,
        display: 'flex',
        alignItems: 'center',
        color: "#32324D",
    },
    price: {
        display: 'flex',
        alignItems: 'center',
        color: "#1F985E",
        fontSize: 14,
        fontWeight: "bold",
    },
    priceIco: {
        width: 10,
        display: 'flex',
        alignItems: 'flex-start',
        color: "#1F985E",
        fontSize: 10,
        fontWeight: "bold",
    },
    counter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 14,
        width: 80,
        height: '100%',
        borderRadius: 16,
    },
    counterItem: {
        padding: 4,
        backgroundColor: '#C9E6D8',
        borderRadius: 100,
    },
    bottomPrimary: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        gap: 8,
        width: '100%',
        height: 54,
        backgroundColor: '#1F985E',
        borderRadius: 16,
    }
});


const Cart = () => {
    // @ts-ignore
    const { cart, removeFromCart, updateQuantity } = useCart();

    // @ts-ignore
    const renderCartItem = ({ item }) => (
        <View style={{display: 'flex', flexDirection: 'row', width: '100%', marginTop: 20}}>
            <View style={styles.card} key={item.id}>
                <Image
                    source={{uri: item.imgUrl}}
                    style={styles.image}
                />
                <View style={{display: 'flex', flexDirection:'column', gap: 4, justifyContent: 'space-between', height: '100%', width: '40%'}}>
                    <View>
                        <Text style={styles.header}>{item.title}</Text>
                        {
                            item?.score
                                ? (
                                    <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center'}}>
                                        <FontAwesomeIcon size={12} color='#FFB01D' icon={faStar} />
                                        <Text style={styles.scoreText}>{item?.score}</Text>
                                    </View>
                                )
                                : ''
                        }
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'flex-start'}}>
                        <Text style={styles.priceIco}>$</Text>
                        <Text style={styles.price}>{item?.price ?? ''}</Text>
                    </View>
                </View>
                <View style={styles.counter}>
                    <Pressable
                        style={styles.counterItem}
                        onPress={ () => updateQuantity(item.id, item.quantity - 1)}
                    >
                        <FontAwesomeIcon color='#1F985E' icon={faMinus}></FontAwesomeIcon>
                    </Pressable>
                    <Text>{ item.quantity }</Text>
                    <Pressable
                        style={styles.counterItem}
                        onPress={ () => updateQuantity(item.id, item.quantity + 1)}
                    >
                        <FontAwesomeIcon color='#1F985E' icon={faPlus}></FontAwesomeIcon>
                    </Pressable>
                </View>
            </View>
            <Pressable onPress={() => removeFromCart(item.id)} style={{ height: 120, backgroundColor:'#1F985E', width: '10%', borderRadius: 16, borderBottomLeftRadius: 0, borderTopLeftRadius: 0, justifyContent: 'center', alignItems: 'center'}}>
                <FontAwesomeIcon color='white' icon={faTrash} />
            </Pressable>
        </View>
    );

    return (
        <FlatList
            data={cart}
            renderItem={renderCartItem}
            keyExtractor={item => item.id}
        />
    );
};

const sendOrderToFirebase = async (cart: any) => {
    try {
        const orderId = `order_${Date.now()}`; // Genera un ID único para la orden
        await set(ref(db, `orders/${orderId}`), {
            items: cart,
            createdAt: new Date().toISOString()
        });
        console.log('Order sent to Firebase');
    } catch (error) {
        console.error('Error sending order to Firebase:', error);
    }
};


// @ts-ignore
const ShoppingCart = ({ sidebarVisible, setSidebarVisible }) => {
    // @ts-ignore
    const { cart } = useCart();

    const handleSendOrder = () => {
        sendOrderToFirebase(cart);
    };

    return (
        <Modal
            animationIn="slideInRight"
            animationOut="slideOutRight"
            swipeDirection="right"
            avoidKeyboard={true}
            hasBackdrop={true}
            backdropColor={'rgba(4,1,1,0.35)'}
            onBackdropPress={() => setSidebarVisible(false)}
            isVisible={sidebarVisible}
            style={{ margin: 0 }}>
            <View style={[styles.container]} >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <Pressable style={styles.backBottom} onPress={() => setSidebarVisible(false)}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Pressable>
                    <View style={{ alignItems: 'flex-start', gap: 3, justifyContent: 'center' }}>
                        <Text style={styles.smallText}>La casa de la abuela</Text>
                        <Text style={styles.title}>Tu orden</Text>
                    </View>
                </View>
                <Cart />
                {
                    cart?.length
                        ? <Pressable style={styles.bottomPrimary} onPress={handleSendOrder}>
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 16,
                                color: '#FFFFFF'
                            }}>Enviar orden</Text>
                            <FontAwesomeIcon color='white' icon={faArrowRight} />
                        </Pressable>
                        : null
                }
            </View>
        </Modal>
    );
};

export default ShoppingCart;