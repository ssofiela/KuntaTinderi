import React from 'react'
import {View, Button, Text} from 'react-native'
import {connect} from 'react-redux'
import {addMessage, deleteMessage} from '../store/actions/actions'

class MessageList extends React.Component {
    
    renderMessageList(){
        return this.props.messages.map(message => {
            return(
                <View>
                    <Text>
                        {message}
                    </Text>
                </View>
                
            )
        })
    }

    render(){
        return(
            <View>
                <Button onPress={this.props.addMessage} title={"Add message"}/>
                <Button onPress={this.props.deleteMessage} color="red" title={"Delete message"}/>

                {this.renderMessageList()}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
      messages: state.messages
    }
  }
  
  const mapDispatchToProps = dispatch => {
      return{

          addMessage: () => dispatch(addMessage()),
          deleteMessage: () => dispatch(deleteMessage())

        }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MessageList);