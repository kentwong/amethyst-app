import { Redirect } from 'expo-router';
import { useAuth } from '@/context/AuthContext';

export default function Index() {
  const { user } = useAuth();

  // Redirect to the appropriate screen based on auth state
  return <Redirect href={user ? '/(tabs)/home' : '/(auth)/login'} />;
}
