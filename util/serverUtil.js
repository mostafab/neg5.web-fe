import { RequestLocalStorage } from 'react-server';

export const isServer = () => typeof window === 'undefined';

export const getRLS = () => {
    const namespace = RequestLocalStorage.getNamespace();
}