
import React from 'react';
import { StatusBar, KeyboardAvoidingView, Platform ,SafeAreaView} from 'react-native';
import RootWidget from './src/RootWidget'

import { Provider } from 'react-redux';
import store from './src/redux/store/store';

export default function App() {

  return (<KeyboardAvoidingView
    style={{ height: '100%', flex: 1, }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, }}>
        <StatusBar backgroundColor="white" barStyle='dark-content' />
        <RootWidget />
      </SafeAreaView>
    </Provider>
  </KeyboardAvoidingView>
  );
}