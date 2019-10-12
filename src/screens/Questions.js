import React from 'react'
import {View, Button, Text, ImageBackground, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {addMessage, deleteMessage} from '../store/actions/actions'
import backgroundTang from '../images/background.png'
import ShortPost from '../components/ShortPost';
import { Ionicons } from '@expo/vector-icons';

class Questions extends React.Component {

    // md-close-circle on ruksi
    // md-checkmark-circle checkki merkki

    render(){
        return(
            <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: '#1C242B', justifyContent: 'center'}}>
                    <Text style={{color:'#F5E415', textAlign: 'center', fontSize: 28}}>Kyssärit</Text>
                </View>
                <View style={{flex: 8}}>
                    <ImageBackground source={backgroundTang} style={{width: '100%', height: '100%'}}>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <ShortPost/>
                        </View>
                        <View style={{alignItems: 'flex-end'}}>
                            <TouchableOpacity style={{ borderRadius: 30, borderWidth: 2, borderColor: '#F5E415'}}><Text style={{color:'#F5E415', margin: 10}}>SKIP</Text></TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <TouchableOpacity style={{margin: 20}}><Ionicons name="md-checkmark-circle" size={64} color='#F5E415'/></TouchableOpacity>
                            <TouchableOpacity style={{margin: 20}}><Ionicons name="md-close-circle" size={64} color='#F5E415'/></TouchableOpacity>
                        </View>
                    </ImageBackground>
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

export default connect(mapStateToProps, mapDispatchToProps)(Questions);