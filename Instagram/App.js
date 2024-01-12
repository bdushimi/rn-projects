import HomeScreen from '@screens/HomeScreen';
import CommentsScreen from '@screens/Comments';
import ProfileScreen from '@screens/ProfileScreen';
import EditProfile from '@screens/EditProfile';
import PostUploadScreen from '@screens/PostUploadScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <PostUploadScreen />
    </SafeAreaProvider>

  );
}

