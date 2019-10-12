import React from 'react'
import {View, Text} from 'react-native'

import MessageList from './src/components/MessageList'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './src/store/reducers/reducer'

const store = createStore(reducer)

class App extends React.Component {

  render(){
    return(
      <Provider store = {store}>
        <View>
          <MessageList/>
        </View>
      </Provider>
    )
  }
}

export default App
