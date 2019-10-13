import React from 'react'
import {View, Button, Text, ImageBackground, TouchableOpacity, AsyncStorage} from 'react-native'
import {connect} from 'react-redux'
import {addMessage, deleteMessage} from '../store/actions/actions'
import questions from '../data/questios.json'


class ShortPost extends React.Component {
    // 1C242B tumma väri

    render(){
        console.log(this.props.question)
        return(
            <View>
                <View style={{margin: 20}}>
                    <Text style={{fontSize: 38, textAlign: 'center', margin: 20}}>{questions.questions[this.props.id-1].question}</Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        messages: state.messages
    }
};

const mapDispatchToProps = dispatch => {
    return{

        addMessage: () => dispatch(addMessage()),
        deleteMessage: () => dispatch(deleteMessage())

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShortPost);