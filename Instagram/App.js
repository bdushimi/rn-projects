import HomeScreen from '@screens/HomeScreen';
import CommentsScreen from '@screens/Comments';
import ProfileScreen from '@screens/ProfileScreen';
import EditProfile from '@screens/EditProfile';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <EditProfile />
    </SafeAreaProvider>

  );
}

