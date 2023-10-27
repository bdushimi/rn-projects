import FeedGridView from '@components/FeedGridView'
import user from '@data/user.json'
import ProfileHeader from '@screens/ProfileScreen/ProfileHeader'
import { StyleSheet, SafeAreaView } from 'react-native'

const ProfileScreen = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <FeedGridView
                data={user.posts}
                ListHeaderComponent={ProfileHeader}
            />
        </SafeAreaView>
    )
}



export default ProfileScreen


const styles = StyleSheet.create({
    imageGrid: {
        flex: 1,
        aspectRatio: 1,
        margin: 1,
        maxWidth: '33%'
    }
})