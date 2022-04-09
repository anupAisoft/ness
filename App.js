import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainStack from './app/stacks/MainStack'
import 'react-native-reanimated'
import {Provider} from 'react-redux'
import { NativeBaseProvider,  } from "native-base";
import { Provider as PaperProvider } from 'react-native-paper';

 import store from './app/store/store'
const App = () => {
  return (
    <Provider store={store}>
     <NativeBaseProvider>
       <PaperProvider>
     <MainStack/>
     </PaperProvider>
    </NativeBaseProvider>
    </Provider>
  )
}

export default App
