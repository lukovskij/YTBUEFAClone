import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import Home from './screens/Home';
import {RecoilRoot} from 'recoil'
import SnackbarContainer from './components/SnackbarContainer';
import ErrorBoundaryComponent from './components/ErrorBoundry';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ErrorBoundaryComponent>
          <RecoilRoot>
            <Home />
            <SnackbarContainer/>
          </RecoilRoot>
        </ErrorBoundaryComponent>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
