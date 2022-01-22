import { setupListeners } from '@reduxjs/toolkit/query';
import { configureInitialStore } from 'services/redux/configureInitialStore';

const store = configureInitialStore();

setupListeners(store.dispatch);

export { store };
