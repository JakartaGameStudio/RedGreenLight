import { useDispatch } from 'react-redux';
import { store } from 'store/store';

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
