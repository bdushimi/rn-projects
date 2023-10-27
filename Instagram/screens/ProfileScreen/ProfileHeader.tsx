import Button from '@components/Button/Button'
import user from '@data/user.json'
import Colors from '@theme/colors'
import fonts from '@theme/fonts'
import { Image, StyleSheet, Text, View, FlatList } from 'react-native'

const ProfileHeader = () => {
    return (
        <View style={styles.root}>
            <View style={styles.headerRow}>
                <Image source={{ uri: user.image }} style={styles.avatar} />
                <View style={styles.numberContainer}>
                    <Text style={styles.numberText}>98</Text>
                    <Text>Posts</Text>
                </View>
                <View style={styles.numberContainer}>
                    <Text style={styles.numberText}>198</Text>
                    <Text>Followers</Text>
                </View>
                <View style={styles.numberContainer}>
                    <Text style={styles.numberText}>298</Text>
                    <Text>Following</Text>
                </View>
            </View>
            <Text style={styles.name}>{user.name}</Text>
            <Text>{user.bio}</Text>

            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Button text='Edit Profile' onPress={() => console.warn('On Edit Profile')} />
                <Button text='Edit Profile' onPress={() => console.warn('On Edit Profile')} />
            </View>
        </View>
    )
}

export default ProfileHeader

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 10,
        marginTop: 25
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    avatar: {
        width: 100,
        aspectRatio: 1,
        borderRadius: 50,
    },
    numberContainer: {
        alignItems: 'center',
    },
    numberText: {
        fontSize: fonts.size.md,
        fontWeight: fonts.weight.full,
        color: Colors.black
    },

    name: {

    },
})