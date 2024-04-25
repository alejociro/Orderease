import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import data from './data'

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.78)

// @ts-ignore
const CarouselCardItem = ({ item, index }) => {
    return (
        <View style={styles.container} key={index}>
            <View style={{display: 'flex', flexDirection:'column', width: ITEM_WIDTH - 150 }}>
                <Text style={styles.smallText}>Producto del dia</Text>
                <Text style={styles.header}>{item.title}</Text>
                <View style={{display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'flex-start'}}>
                    <Text style={styles.priceIco}>$</Text>
                    <Text style={styles.price}>{item.price}</Text>
                </View>
            </View>
            <Image style={styles.imageBackground}/>
            <Image style={styles.imageBackground2} />
            <Image style={styles.imageBackground3} />
            <Image
                source={{uri: item.imgUrl}}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        height: 130,
        width: ITEM_WIDTH,
        backgroundColor: '#213423',
        borderRadius: 16,
        elevation: 7,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 100,
    },
    imageBackground: {
        width: 100,
        height: 100,
        right: 10,
        borderRadius: 100,
        position: "absolute",
        backgroundColor: '#FFFFFF',
        opacity: 0.09,
        zIndex: -1,
    },
    imageBackground2: {
        width: 120,
        height: 120,
        right: 1,
        borderRadius: 100,
        position: "absolute",
        backgroundColor: '#FFFFFF',
        opacity: 0.06,
        zIndex: -1,
    },
    imageBackground3: {
        width: 140,
        height: 140,
        right: -10,
        borderRadius: 100,
        position: "absolute",
        backgroundColor: '#FFFFFF',
        opacity: 0.04,
        zIndex: -1,
    },
    header: {
        fontFamily: 'Mulish',
        fontWeight: "900",
        fontSize: 18,
        display: 'flex',
        alignItems: 'center',
        color: "white",
    },
    smallText: {
        fontFamily: 'Mulish',
        fontWeight: "400",
        fontSize: 12,
        color: '#dddddd',
    },
    price: {
        fontFamily: 'Mulish',
        display: 'flex',
        alignItems: 'center',
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    priceIco: {
        width: 10,
        fontFamily: 'Mulish',
        display: 'flex',
        alignItems: 'flex-start',
        color: "white",
        fontSize: 10,
        fontWeight: "bold",
    }
})

const Promotions = () => {
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)

    return (
        <View>
            <Carousel
                layout="default"
                ref={isCarousel}
                data={data}
                autoplayInterval={6000}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={false}
                vertical={false}
                autoplay={true}
                loop={true}
            />
        </View>
    )
}

export default Promotions