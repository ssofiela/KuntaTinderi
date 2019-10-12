import React from 'react'
import {View, Button, Text, ImageBackground} from 'react-native'
import {connect} from 'react-redux'
import {addMessage, deleteMessage} from '../store/actions/actions'

class MessageList extends React.Component {

    render(){
        return(
            <View>
                {this.post}
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