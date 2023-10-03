import { Text, Pressable } from "react-native";
import { ReactNode, useState } from "react";

interface IDoublePressable {
  onDoublePress?: () => void;
  children: ReactNode
}


const DoublePressable = ({ onDoublePress = () => {}, children }: IDoublePressable) => {

  const [pressCount, setPressCount] = useState(0);

  const doublePressThreshold = 300;
  let lastPressTime = 0;

  const handleDoublePress = () => {
    const currentTime = new Date().getTime();
    if (currentTime - lastPressTime <= doublePressThreshold) {
      setPressCount(pressCount + 1);
      lastPressTime = 0;
      onDoublePress()
    } else {
      // Single press detected
      lastPressTime = currentTime;
    }
  };

  return (
    <Pressable onPress={handleDoublePress}>
      {children}
    </Pressable>
  );
};

export default DoublePressable;
