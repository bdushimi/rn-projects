import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import GlobalStyles from '@theme/GlobalStyles'
import { Camera, CameraType } from 'expo-camera';

const PostUploadScreen = () => {
  const [type, setType] = useState(CameraType.back);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)



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

  return (
    <SafeAreaView style={GlobalStyles.safeArea}>
      <View style={styles.page}>
        <Camera type={type} style={styles.camera}>
        </Camera>
        <View>
          <TouchableOpacity onPress={toggleCameraType}>
            <Text>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  camera: {
    width: '100%',
    aspectRatio: 3 / 4
  }
})

export default PostUploadScreen