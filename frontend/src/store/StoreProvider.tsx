'use client';

import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './store';

type Props = {
  children: React.ReactNode | React.ReactNode[]
}

const StoreProvider: React.FC<Props> = ({ children }) => {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}

export default StoreProvider;