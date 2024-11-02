import { Href, Redirect } from 'expo-router';
import { useAuth } from '@/context/AuthContext';

const HOME_ROUTE = '/(tabs)/home' as Href;
const LOGIN_ROUTE = '/(auth)/login' as Href;
export default function Index() {
  const { user } = useAuth();

  // Redirect to the appropriate screen based on auth state
  return <Redirect href={user ? HOME_ROUTE : LOGIN_ROUTE} />;
}
