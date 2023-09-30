import { StyleSheet } from "react-native"
import Colors from '@theme/colors';
import fonts from '@theme/fonts';


const styles = StyleSheet.create({
  post: {},
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontWeight: fonts.weight.bold,
    color: Colors.black,
  },

  threeDots: {
    marginLeft: "auto",
  },

  image: {
    width: "100%",
    aspectRatio: 1,
  },
  footer: {
    padding: 19,
  },
  iconContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  heading4: {
    color: Colors.grey,
    lineHeight: 20,
  },
});

export default styles