import { FlatList, Image, useWindowDimensions, View, ViewabilityConfig, ViewToken, } from 'react-native'
import { useState,useRef } from 'react'
import styles from '@components/Carousel/styles'
import DoublePressable from '@components/DoublePressable'
import Colors from '@theme/colors'


interface ICarousel {
    images: string[]
    onDoublePress?: () => void
}

const Carousel = ({ images, onDoublePress = () => { } }: ICarousel) => {
    const { width } = useWindowDimensions()
    const [activeImageIndex, setActiveImageIndex] = useState(0)


    const viewabilityConfig: ViewabilityConfig = {
        itemVisiblePercentThreshold: 51
    }
    const onViewableItemsChanged = useRef(({ viewableItems } : {viewableItems: Array<ViewToken>}) => {
        if (viewableItems.length > 0) {
            setActiveImageIndex(viewableItems[0].index)
        }
    })

    return (
        <View>
            <FlatList
                data={images}
                renderItem={({ item }) => <DoublePressable onDoublePress={onDoublePress}>
                    <Image source={{ uri: item }} style={[styles.image, { width }]} />
                </DoublePressable>}
                horizontal
                pagingEnabled
                onViewableItemsChanged={onViewableItemsChanged.current}
                viewabilityConfig={viewabilityConfig}
            />
            <View style={styles.dotsContainer}>
                {images.map((_, index) => (
                    <View
                        key={index}
                        style={[styles.dot, { backgroundColor: activeImageIndex === index ? Colors.primary : Colors.white }]}
                    />
                ))}
            </View>
        </View>
    )
}

export default Carousel