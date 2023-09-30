import { StyleSheet } from "react-native";
import Colors from "@theme/colors";

const styles = StyleSheet.create({
  commentsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  theComment: {
    flex: 1,
  },
  heading4: {
    color: Colors.grey,
    lineHeight: 20,
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default styles;
