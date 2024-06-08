import React from 'react'
import {View, Text, StyleSheet, Dimensions, Image} from "react-native"
import {categories} from '@components/data'

export const SLIDER_WIDTH = Dimensions.get('window').width - 40
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH)

// @ts-ignore
const CarouselCardItem = ({ item, index }) => {
    return (
        <View style={styles.container} key={index}>
            <Image
                source={{uri: item.imgUrl}}
                style={styles.image}
            />
            <View style={{display: 'flex', flexDirection:'column', gap: 4, justifyContent: 'center'}}>
                <Text style={styles.header}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        padding: 15,
        height: 120,
        width: ITEM_WIDTH,
        backgroundColor: 'white',
        borderRadius: 16,
        elevation: 2,
        marginRight: 16,
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
    description: {
        display: 'flex',
        alignItems: 'center',
        color: "#C0C0CF",
        fontSize: 16,
        width: 169,
    },
})

const Categories = () => {
    const [index, setIndex] = React.useState(0)
    return (
        <View style={{
            gap: 20,
            flexDirection: 'column',
        }}>
            <Text style={{
                fontWeight: '600',
                fontSize: 18,
                color: '#525950',
            }}>
                Categorías
            </Text>
            <View style={{
                gap: 20,
                flexDirection: 'column',
                paddingBottom: 40,
            }}>
                {
                    categories.map((item) => {
                        return (
                            <CarouselCardItem key={item.id} item={item} index={index}></CarouselCardItem>
                        );
                    })
                }
            </View>
        </View>
    )
}

export default Categories