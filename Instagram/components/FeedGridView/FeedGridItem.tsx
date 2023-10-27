import { IPost } from '@myTypes/models'
import { Image, View, StyleSheet } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";
import Colors from '@theme/colors';


interface IGridItem {
    post: IPost
}


const FeedGridItem = ({ post }: IGridItem) => {
    return (
        <View style={styles.postGrid}>
            <Image
                source={{ uri: post.image || post.images[0] }}
                style={styles.postItem}
            />
            {
                post.images && (
                    <MaterialIcons
                        name="collections"
                        size={16}
                        color={Colors.white}
                        style={{position: 'absolute', top: 5, right: 5}}
                    />
                )
            }
        </View>
    )
}

export default FeedGridItem


const styles = StyleSheet.create({
    postGrid: {
        flex: 1,
        aspectRatio: 1,
        padding: 1,
        maxWidth: '33.333%'
    },

    postItem: {
        flex: 1,
    }
})