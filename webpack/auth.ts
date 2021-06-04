import { indexedDBLocalPersistence, initializeAuth } from '@firebase/auth';
import { getApp } from '@firebase/app';

export const auth = initializeAuth(getApp(), {
    persistence: [indexedDBLocalPersistence]
});