import AntDesign from "@expo/vector-icons/AntDesign";
import Colors from "@theme/colors";
import fonts from "@theme/fonts";
import { Image, Text, View, Pressable } from "react-native";
import styles from "./styles";
import { useState } from "react";
import { IComment } from "@myTypes/models";

interface ICommentProps {
  comment: IComment
  includeDetails: boolean
}


const Comment = ({ comment, includeDetails = false }: ICommentProps) => {

  const [isLiked, setIsLiked] = useState(false)

  const toggleLike = () => {
    setIsLiked(v => !v)
  }

  return (
    <View>
      <View style={styles.commentContainer}>
        {includeDetails && <Image source={{ uri: comment.user.image }} style={styles.avatar} />}
        <View style={styles.theComment}>
          <Text style={styles.commentText}>
            <Text style={{ fontWeight: fonts.weight.bold }}>{comment.user.username}</Text>
            {" "}
            {comment.comment}
          </Text>
          {
            includeDetails && (<View style={styles.footer}>
              <Text style={styles.footerText}>2d</Text>
              <Text style={styles.footerText}>5 likes</Text>
              <Text style={styles.footerText}>Reply</Text>
            </View>)
          }
        </View>
        <Pressable onPress={toggleLike} hitSlop={1}>
          <AntDesign
            name={isLiked ? "heart" : "hearto"}
            size={14}
            style={styles.icon}
            color={isLiked ? Colors.accent : Colors.black}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Comment;
