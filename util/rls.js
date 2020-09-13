import { RequestLocalStorage } from 'react-server';

const RLS = RequestLocalStorage.getNamespace();

export default {
    get() {
        return RLS();
    }
};
