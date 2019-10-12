import React from 'react'
import {View, Button, Text, ImageBackground, TouchableOpacity, AsyncStorage} from 'react-native'
import {connect} from 'react-redux'
import {addMessage, deleteMessage} from '../store/actions/actions'
import questions from '../data/questios.json'


class ShortPost extends React.Component {
    // 1C242B tumma väri

    render(){
        return(
            <View style={{margin: 10, flexDirection: 'column', backgroundColor: '#F5E415'}}>
                <View style={{margin: 20}}>
                    <Text style={{fontSize: 38, textAlign: 'center', margin: 20, marginBottom: 40}}>Kysymykset loppuivat tältä erää.</Text>
                    <TouchableOpacity style={{ color: "#1C242B", position: 'absolute', right: 0, bottom: 0}} onPress={() => this.navigation.navigate('MyAnswers')}><Text style={{fontWeight: 'bold'}}>OMAT VASTAUKSET</Text></TouchableOpacity>
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