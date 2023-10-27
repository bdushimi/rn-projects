import { Ionicons } from "@expo/vector-icons";
import Colors from '@theme/colors';
import { ResizeMode, Video } from 'expo-av';
import { useEffect, useRef, useState } from 'react';
import { Pressable, TouchableOpacity, View } from 'react-native';
import styles from './styles';


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