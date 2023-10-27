import { IPost } from '@myTypes/models';
import { FlatList, StyleSheet } from 'react-native';
import FeedGridItem from './FeedGridItem';


interface IFeedGridView {
    data: IPost[]
    ListHeaderComponent?: | React.ComponentType<any> | React.ReactElement | null | undefined;
}

const FeedGridView = ({ data, ListHeaderComponent }: IFeedGridView) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <FeedGridItem post={item} />
            )}
            ListHeaderComponent={ListHeaderComponent}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            style={styles.container}
        />
    )
}

export default FeedGridView

const styles = StyleSheet.create({
    container: {
        marginHorizontal: -1
    },
})

