import { signInAnonymously } from 'firebase/auth';
import { auth } from './firebase';

export function signIn() {
    return signInAnonymously(auth);
}