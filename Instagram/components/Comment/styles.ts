import { StyleSheet } from "react-native";
import Colors from "@theme/colors";

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: "row",
  },
  theComment: {
    flex: 1,
  },

  commentText: {
    lineHeight: 18,
  },
  heading4: {
    color: Colors.grey,
    lineHeight: 20,
  },
  icon: {
    marginHorizontal: 5,
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 10,
  },
  footer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  footerText: {
    marginRight: 10
  },
});

export default styles;
