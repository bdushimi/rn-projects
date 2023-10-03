import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import FeedPost from '@components/FeedPost';
import posts from '@data/posts.json'

export default function HomeScreen() {
    return (
        <View style={styles.application}>
            <FlatList
                data={posts}
                renderItem={({ item }) => <FeedPost post={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    application: {
        flex: 1
    },
});
