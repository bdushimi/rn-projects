import { View, Text } from "react-native";
import styles from "./styles";
import fonts from "@theme/fonts";
import AntDesign from "@expo/vector-icons/AntDesign";
import Colors from "@theme/colors";

const Comment = ({ comment }) => {
  return (
    <View>
      <View style={styles.commentsContainer}>
        <Text style={styles.theComment}>
          <Text style={{ fontWeight: fonts.weight.bold }}>{ comment.user.username}</Text>
          {"   "}
          {comment.comment}
        </Text>
        <AntDesign
          name={"hearto"}
          size={14}
          style={styles.icon}
          color={Colors.black}
        />
      </View>
    </View>
  );
};

export default Comment;
