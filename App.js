import { StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import {colors} from './src/globals/colors';
import Navigator from './src/navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/store';
import { useEffect } from 'react';

export default function App() {

  return (
    <>
      <Provider store={store}>
        <Navigator/>
      </Provider>
      <StatusBar style="light" backgroundColor={colors.primary}/>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
  },
});
