import { MaterialIcons } from "@expo/vector-icons";
import GlobalStyles from '@theme/GlobalStyles';
import Colors from '@theme/colors';
import { Camera, CameraType, FlashMode, CameraPictureOptions, CameraRecordingOptions } from 'expo-camera';
import { useEffect, useState, useRef } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const flashModes = [
  FlashMode.off,
  FlashMode.on,
  FlashMode.auto,
  FlashMode.torch
]

const flashModesIcon = {
  [FlashMode.off]: "flash-off",
  [FlashMode.on]: "flash-on",
  [FlashMode.auto]: "flash-auto",
  [FlashMode.torch]: "highlight"
}

const PostUploadScreen = () => {
  const [type, setType] = useState(CameraType.back);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const [flash, setFlash] = useState(FlashMode.off)
  const [isCameraReady, setIsCameraReady] = useState(false)
  const [isRecording, setIsRecording] = useState(false)

  const cameraRef = useRef<Camera>(null)



  useEffect(() => {

    const getPermissions = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microPhonePermission = await Camera.requestMicrophonePermissionsAsync()
      setHasPermission(cameraPermission.status === 'granted' && microPhonePermission.status === 'granted')
    }
    getPermissions()
  }, [])

  if (hasPermission === null) {
    return <Text>Loading...</Text>
  }

  if (hasPermission === false) {
    return <Text>No Access to the Camera & Microphone</Text>
  }


  const toggleCameraType = () => {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  const onFlipCameraHandle = () => {
    setType(currentCameraType => currentCameraType === CameraType.back ? CameraType.front : CameraType.back);
  }

  const onFlashFlipHandle = () => {
    let currentFlashIndex = flashModes.indexOf(flash)
    let nextFlashIndex = currentFlashIndex === flashModes.length - 1 ? 0 : currentFlashIndex + 1
    setFlash(currentFlashMode => flashModes[nextFlashIndex]);
  }

  const onTakePictureHandle = async () => {
    if (!isCameraReady || !cameraRef.current || isRecording) {
      return
    }
    const options: CameraPictureOptions = {
      quality: 1,
      skipProcessing: true
    }
    const result = await cameraRef.current.takePictureAsync(options)
    console.log(result)
  }

  const onStartRecordingHandle = async () => {
    if (!isCameraReady || !cameraRef.current || isRecording) {
      return
    }

    const videoRecordingOptions: CameraRecordingOptions = {
      quality: Camera.Constants.VideoQuality['640:480'],
      maxDuration: 60,
      maxFileSize: 10 * 1024 * 1024,
      mute: false
    }

    try {
      setIsRecording(true);
      const video = await cameraRef.current.recordAsync(videoRecordingOptions);
    } catch (error) {
      console.error(error);
    }
    setIsRecording(false);
  }

  const onStopRecordingHandle = async () => {
    if (isRecording) {
      cameraRef.current?.stopRecording();
      setIsRecording(false)
    }
  }


  return (
    <SafeAreaView style={GlobalStyles.safeArea}>
      <View style={styles.page}>
        <Camera
          ref={cameraRef}
          type={type}
          style={styles.camera}
          flashMode={flash}
          onCameraReady={() => setIsCameraReady(true)}
        >
        </Camera>
        <View style={[styles.buttonsContainer, { top: 25 }]}>
          <MaterialIcons name="close" size={30} color={Colors.white} />
          <Pressable onPress={onFlashFlipHandle}>
            <MaterialIcons name={flashModesIcon[flash]} size={30} color={Colors.white} />
          </Pressable>
          <MaterialIcons name="settings" size={30} color={Colors.white} />
        </View>
        <View style={[styles.buttonsContainer, { bottom: 25 }]}>
          <MaterialIcons name="photo-library" size={30} color={Colors.white} />
          {
            isCameraReady && (
              <Pressable
                onPress={onTakePictureHandle}
                onLongPress={onStartRecordingHandle}
                onPressOut={onStopRecordingHandle}
              >
                <View style={[styles.circle, { backgroundColor: isRecording ? Colors.accent : Colors.white }]} />
              </Pressable>
            )
          }
          <Pressable onPress={onFlipCameraHandle}>
            <MaterialIcons name="flip-camera-ios" size={30} color={Colors.white} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.black

  },
  camera: {
    width: '100%',
    aspectRatio: 3 / 4
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    position: 'absolute'
  },

  circle: {
    width: 65,
    aspectRatio: 1,
    borderRadius: 65,
    backgroundColor: Colors.white
  }
})

export default PostUploadScreen