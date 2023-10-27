import Colors from "@theme/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
        alignSelf: "stretch",
    marginBottom: 15
  },

    label: {
      width: '30%'
  },

    input: {
        borderColor: Colors.border,
        borderBottomWidth: 1,
  },
});

export default styles;
