import { useDispatch } from 'react-redux';
import { store } from 'services/redux/store';

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
