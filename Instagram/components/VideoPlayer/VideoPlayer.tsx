import { View, Text, Button, Pressable, TouchableOpacity } from 'react-native'
import { Video, ResizeMode } from 'expo-av';
import { useRef, useState, useEffect } from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from './styles';
import Colors from '@theme/colors';


interface IVideoPlayer {
  uri: string
  paused: boolean
}

export default function VideoPlayer({ uri, paused }: IVideoPlayer) {
  const video = useRef(null);
  const [isPlaying, setIsPlaying] = useState(paused);
  const [muted, setMuted] = useState(true)

  console.log('paused', paused)


  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    toggleVideo()
  }, [paused])

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleVideo}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri,
          }}
          shouldPlay={isPlaying}
          resizeMode={ResizeMode.COVER}
          isMuted={muted}
          isLooping
        />
      </TouchableOpacity>
      <Pressable style={styles.muteButton} onPress={() => setMuted(v => !v)}>
        <Ionicons
          name={muted ? 'volume-mute' : 'volume-medium'}
          size={20}
          style={{ color: Colors.white }} />
      </Pressable>
    </View>
  )
}