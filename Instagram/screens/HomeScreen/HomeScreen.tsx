import FeedPost from '@components/FeedPost';
import posts from '@data/posts.json';
import { useRef, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View, ViewToken, ViewabilityConfig } from 'react-native';

export default function HomeScreen() {

    const [activePostId, setActivePostId] = useState<string | null>(null)

    const viewabilityConfig: ViewabilityConfig = {
        itemVisiblePercentThreshold: 51
    }
    const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
        if (viewableItems.length > 0) {
            setActivePostId(viewableItems[0].item.id)
        }
    })

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.application}>
                <FlatList
                    data={posts}
                    renderItem={({ item }) => <FeedPost post={item} isVisible={activePostId === item.id} />}
                    showsVerticalScrollIndicator={false}
                    onViewableItemsChanged={onViewableItemsChanged.current}
                    viewabilityConfig={viewabilityConfig}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    application: {
        flex: 1,
    },
});
