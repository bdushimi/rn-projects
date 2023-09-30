import { StyleSheet, Text, View, Image } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "@theme/colors";
import fonts from "@theme/fonts";
import styles from "./style";
import Comment from "@components/Comment";
import { IPost, IUser, IComment } from '@types/models';


export default function FeedPost({ post }: IPost) {
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.username}>{post.user.username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={"hearto"}
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
            style={{ marginLeft: "auto" }}
            color={Colors.black}
          />
        </View>

        <Text>
          Liked by <Text style={{ fontWeight: fonts.weight.bold }}>menu</Text>{" "}
          and <Text>{post.nofLikes}</Text>
          <Text> others</Text>{" "}
        </Text>
        <Text>
          <Text style={{ fontWeight: fonts.weight.bold }}>
            {post.user.username}
          </Text>
          {"   "}
          {post.description}
        </Text>
        <Text style={styles.heading4}>
          View all {post.nofComments} Comments
        </Text>
        {post.comments.map((comment: IComment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
        <Text style={styles.heading4}>{post.createdAt}</Text>
      </View>
    </View>
  );
}
