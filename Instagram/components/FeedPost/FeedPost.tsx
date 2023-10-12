import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "@theme/colors";
import fonts from "@theme/fonts";
import styles from "./style";
import Comment from "@components/Comment";
import { IPost, IUser, IComment } from '@myTypes/models';
import { useState } from "react";
import DoublePressable from "@components/DoublePressable";
import Carousel from "@components/Carousel";
import VideoPlayer from "@components/VideoPlayer";


interface IFeedPost {
  post: IPost
  isVisible: boolean
}


export default function FeedPost({ post , isVisible}: IFeedPost) {

  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [pressCount, setPressCount] = useState(0);

  const doublePressThreshold = 300;
  let lastPressTime = 0;
  let postContent = null


  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded((prevState) => !prevState)
  }

  const toggleLike = () => {
    setIsLiked(prevState => !prevState)
  }


  const handleDoublePress = () => {
    const currentTime = new Date().getTime();
    if (currentTime - lastPressTime <= doublePressThreshold) {
      setPressCount(pressCount + 1);
      lastPressTime = 0;
      toggleLike()
    } else {
      // Single press detected
      lastPressTime = currentTime;
    }
  };


  if (post.image) {
    postContent = (
      <DoublePressable onDoublePress={toggleLike}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
      </DoublePressable>

    )
  } else if (post.images) {
    postContent = <Carousel images={post.images} onDoublePress={toggleLike} />
  } else if (post.video) {
    postContent = (
      <DoublePressable>
        <VideoPlayer uri={post.video} paused={!isVisible} />
      </DoublePressable>
    )
  }



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
      {postContent}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            <AntDesign
              name={isLiked ? 'heart' : "hearto"}
              size={24}
              style={styles.icon}
              color={isLiked ? Colors.accent : Colors.black}
            />
          </Pressable>
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
        <Text numberOfLines={isDescriptionExpanded ? 0 : 2}>
          <Text style={{ fontWeight: fonts.weight.bold }}>
            {post.user.username}
          </Text>
          {"   "}
          {post.description}
        </Text>
        <Text onPress={toggleDescriptionExpanded}>
          {isDescriptionExpanded ? 'Less' : 'More'}
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
