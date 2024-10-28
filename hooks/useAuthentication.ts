// app/hooks/useAuthentication.ts
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { Alert } from 'react-native';

const auth = getAuth();

const validate = (email: string, password: string) => {
  if (!email || !password) {
    return false;
  }
  return true;
};

export const useAuthentication = () => {
  const register = async (email: string, password: string): Promise<UserCredential | void> => {
    console.log('Registering with:', email, 'and password: ', password);
    if (!validate(email, password)) {
      Alert.alert('Invalid email or password');
      return;
    }

    try {
      const registerUser = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered:', registerUser);
      return registerUser;
    } catch (error) {
      Alert.alert('Error registering:', (error as Error).message);
      console.log('Error registering:', error);
      throw error;
    }
  };

  const login = async (email: string, password: string): Promise<UserCredential | void> => {
    console.log('Logging in with:', email, 'and password: ', password);
    if (!validate(email, password)) {
      Alert.alert('Invalid email or password');
      return;
    }

    try {
      const loginUser = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', loginUser);
      return loginUser;
    } catch (error) {
      Alert.alert('Error login user:', (error as Error).message);
      console.log('Error login user:', error);
      throw error;
    }
  };

  return {
    login,
    register,
  };
};
