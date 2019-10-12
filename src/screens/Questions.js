import React from 'react'
import {View, Button, Text} from 'react-native'
import {connect} from 'react-redux'
import {addMessage, deleteMessage} from '../store/actions/actions'
import {DrawerActions} from "react-navigation-drawer";

class Questions extends React.Component {

    render(){
        return(
            <View>
                <Text>Question page</Text>
                <Button title={"avaa hamppari"} onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}></Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Questions);