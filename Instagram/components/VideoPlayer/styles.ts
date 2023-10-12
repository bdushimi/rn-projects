import { StyleSheet } from "react-native";
import Colors from "@theme/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  muteButton: {
      backgroundColor: Colors.black,
      padding: 5,
      position: 'absolute',
      bottom: 10,
      right: 10,
      borderRadius: 15
  },
});

export default styles;
