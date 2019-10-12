import React from 'react'
import {View, Text} from 'react-native'


import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './src/store/reducers/reducer'
import AppNavigator from "./src/components/Navigation";

const store = createStore(reducer)

class App extends React.Component {

  render(){
    return(
      <Provider store = {store}>
          <AppNavigator/>
      </Provider>
    )
  }
}

export default App
