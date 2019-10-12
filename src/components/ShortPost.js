import React from 'react'
import {View, Button, Text, ImageBackground, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {addMessage, deleteMessage} from '../store/actions/actions'

class ShortPost extends React.Component {
    // 1C242B tumma väri

    render(){
        return(
            <View>
                <View style={{margin: 20}}>
                    <TouchableOpacity style={{backgroundColor: '#F5E415'}}><Text style={{fontSize: 38, textAlign: 'center', margin: 20}}>Haluaisitko laskea nopeuksia koulun lähellä?</Text></TouchableOpacity>
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