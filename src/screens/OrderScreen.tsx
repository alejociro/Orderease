import React, {useState} from "react";
import {FlatList, Image, StyleSheet, Text, View,} from "react-native";
import Location from "components/Location.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {get, ref} from "firebase/database";
import {db} from "utils/firebase.ts";
import { useOrder} from "viewModels/OrderContext.tsx";


const getOrderToFirebase = async () => {
    try {
        const orderId = `order_${Date.now()}`;
        return await get(ref(db, `orders/${orderId}`));
    } catch (error) {
        console.error('Error sending order to Firebase:', error);
    }
};


const Cart = () => {
    // @ts-ignore
    const { orderActive } = useOrder();

    // @ts-ignore
    const renderCartItem = ({ item }) => (
        <View style={{display: 'flex', flexDirection: 'row', width: '100%', marginTop: 20}}>
            <View style={styles.card} key={item.id}>
                <Image
                    source={{uri: item.imgUrl}}
                    style={styles.image}
                />
                <View style={{display: 'flex', flexDirection:'row', gap: 4, justifyContent: 'space-between', alignItems: 'center', height: '100%', width: '75%'}}>
                    <Text style={styles.header}>{item.title}</Text>
                    <View style={{display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'flex-start'}}>
                        <Text style={styles.priceIco}>$</Text>
                        <Text style={styles.price}>{item?.price ? (parseFloat(item.price) * parseFloat(item.quantity)) : ''}</Text>
                    </View>
                </View>
            </View>
        </View>
    );

    return (
        <FlatList
            data={orderActive}
            renderItem={renderCartItem}
            keyExtractor={item => item.id}
        />
    );
};


// @ts-ignore
export function MenuScreen({navigation}) {
    // @ts-ignore
    const [setSidebarVisible] = useState(false);

    return (
            <View>
                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 10,
                    }}>
                    <Location navigation={navigation} setSidebarVisible={setSidebarVisible} />
                    <View style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: 'white',
                        width: '85%',
                        borderRadius: 16,
                        gap: 14,
                        marginHorizontal: 20,
                        height: 350,
                        shadowColor: 'rgba(0,0,0,0.45)',
                        shadowRadius: 4,
                        elevation: 1,
                        overflow: 'hidden',
                    }}>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 10
                        }}>
                            <Text
                                style={{
                                    fontWeight: "400",
                                    fontSize: 20,
                                    lineHeight: 22,
                                    color: '#a1af9e',
                                    paddingTop: 32,
                                }}
                            >
                                Tu orden estará lista en
                            </Text>
                            <Text
                                style={{
                                    fontWeight: "400",
                                    fontSize: 20,
                                    lineHeight: 22,
                                    color: '#1F985E',
                                }}
                            >
                                20 Minutos
                            </Text>
                        </View>
                        <Image style={{
                            width: "90%",
                            height: "75%"
                        }} source={require('./../imgs/success.png')}></Image>
                    </View>
                    <View style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: 'white',
                        width: '85%',
                        borderRadius: 16,
                        gap: 14,
                        marginHorizontal: 20,
                        shadowColor: 'rgba(0,0,0,0.45)',
                        shadowRadius: 4,
                        elevation: 1,
                    }}>
                        <Cart />
                    </View>
                </View>
            </View>
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
    scoreText: {
        fontWeight: '600',
        fontSize: 14,
        color: '#525950FF',
    },
    card: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 16,
        gap: 5,
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
        width: 50,
        resizeMode: 'cover',
        height: 50,
        borderRadius: 100,
    },
    header: {
        fontWeight: "600",
        fontSize: 16,
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
export default MenuScreen;