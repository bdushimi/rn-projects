import { StyleSheet, Text, View, Image } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '@theme/colors';
import fonts from '@theme/fonts';


export default function FeedPost() {
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg'
          }}

          style={styles.userAvatar}
        />
        <Text style={styles.username}>bdushimi</Text>
        <Entypo name='dots-three-horizontal' size={16} style={styles.threeDots} />
      </View>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'
        }}

        style={styles.image}
      />
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.icon}
            color={Colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={Colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={Colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{ marginLeft: 'auto' }}
            color={Colors.black}
          />
        </View>

        <Text>Liked by <Text style={{ fontWeight: fonts.weight.bold }}>menu</Text> and <Text>100 others</Text>  </Text>
        <Text>
          <Text style={{ fontWeight: fonts.weight.bold }}>bdushimi</Text>{'   '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec risus sem, interdum lobortis facilisis non, facilisis ac urna
        </Text>
        <Text style={styles.heading4}>View all 20 Comments</Text>
        <View style={styles.commentsContainer}>
          <Text style={styles.theComment}>
            <Text style={{ fontWeight: fonts.weight.bold }}>bdushimi</Text>{'   '}
            Nullam vel laoreet leo. Maecenas sed diam tempor, posuere turpis vel, pulvinar orci. Nullam vel laoreet leo. Maecenas sed diam tempor, posuere turpis vel, pulvinar orci
          </Text>
          <AntDesign
            name={'hearto'}
            size={14}
            style={styles.icon}
            color={Colors.black}
          />
        </View>
        <Text style={styles.heading4}>27 September 2023</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },

  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },

  username: {
    fontWeight: fonts.weight.bold,
    color: Colors.black
  },

  threeDots: {
    marginLeft: 'auto'
  },

  image: {
    width: '100%',
    aspectRatio: 1
  },
  footer: {
    padding: 19
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  commentsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  theComment: {
    flex: 1
  },
  heading4: {
    color: Colors.grey,
    lineHeight: 20,
  }
});
