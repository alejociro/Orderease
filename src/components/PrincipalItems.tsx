import React, {useState} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, FlatList, SafeAreaView, Pressable} from "react-native"
import { principalItems } from '@components/data'
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import ItemView from "components/ItemView.tsx";

export const SLIDER_WIDTH = Dimensions.get('window').width - 40
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH/3)

// @ts-ignore
const CarouselCardItem = ({ item, index, setModalVisible, setCurrentItem  }) => {
    return (
        <Pressable style={styles.container} key={index} onPress={() => {
            setCurrentItem(item)
            setModalVisible(true)
        }}>
                {
                    item.score
                        ? (
                            <View style={styles.score}>
                                <FontAwesomeIcon size={10} color='#FFB01D' icon={faStar} />
                                <Text style={styles.scoreText}>{item.score}</Text>
                            </View>
                        )
                        : ''
                }
                <Image
                    source={{uri: item.imgUrl}}
                    style={styles.image}
                />
                <View style={{display: 'flex', flexDirection:'column', gap: 4, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.header}>{item.title}</Text>
                    <View style={{display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'flex-start'}}>
                        <Text style={styles.priceIco}>$</Text>
                        <Text style={styles.price}>{item.price ?? ''}</Text>
                    </View>
                </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 2,
        height: 174,
        width: ITEM_WIDTH,
        backgroundColor: 'white',
        borderRadius: 16,
        elevation: 2,
        marginRight: 16,
        marginVertical: 8,
    },
    score: {
        position: 'absolute',
        top: "15%",
        right: "15%",
        flexDirection: 'row',
        gap: 8,
        paddingHorizontal: 8,
        alignItems: 'center',
        height: 15,
        width: 40,
        backgroundColor: 'white',
        borderRadius: 100,
        shadowColor: 'black',
        elevation: 1,
        zIndex: 100,
    },
    scoreText: {
        fontWeight: '600',
        fontSize: 11,
        color: '#8E8EA9',
    },
    image: {
        width: "80%",
        resizeMode: 'cover',
        height: "60%",
        borderRadius: 100,
    },
    header: {
        fontWeight: "600",
        fontSize: 14,
        display: 'flex',
        alignItems: 'center',
        color: "#32324D",
    },
    price: {
        display: 'flex',
        alignItems: 'center',
        color: "#1F985E",
        fontSize: 16,
        fontWeight: "bold",
    },
    priceIco: {
        width: 10,
        display: 'flex',
        alignItems: 'flex-start',
        color: "#1F985E",
        fontSize: 10,
        fontWeight: "bold",
    }
})

const PrincipalItems = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);

    return (
        <View style={{
            gap: 20,
            flexDirection: 'column',
        }}>
            <ItemView setModalVisible={setModalVisible} modalVisible={modalVisible} item={currentItem} />
            <Text style={{
                fontWeight: '600',
                fontSize: 18,
                color: '#525950',
            }}>
                Los más pedidos
            </Text>

            <SafeAreaView>
                <FlatList
                    horizontal
                    data={principalItems}
                    renderItem={({ item, index }) => (
                        <CarouselCardItem item={item} index={index} setModalVisible={setModalVisible} setCurrentItem={setCurrentItem}></CarouselCardItem>
                    )}
                />
            </SafeAreaView>
        </View>
    )
}

export default PrincipalItems