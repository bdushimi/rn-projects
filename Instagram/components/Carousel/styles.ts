import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  dot: {
    width: 10,
    aspectRatio: 1,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    margin: 10
  }
});

export default styles;
