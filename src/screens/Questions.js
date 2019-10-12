import React from 'react'
import {View, Button, Text, ImageBackground, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {addMessage, deleteMessage, changePost} from '../store/actions/actions'
import backgroundTang from '../images/background.png'
import ShortPost from '../components/ShortPost';
import LongPost from '../components/LongPost';
import { Ionicons } from '@expo/vector-icons';

class Questions extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            short: true
        }
    }

    componentDidMount() {
        this.setState({short: true});
    }



    // md-close-circle on ruksi
    // md-checkmark-circle checkki merkki

    static navigationOptions = {
        title: 'Kyssärit',
    };

    changeData() {
        this.setState({short: false});
    }


    render(){
        return(
            <View>
                <ImageBackground source={backgroundTang} style={{width: '100%', height: '100%'}}>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>

                        {this.state.short
                        ? (<TouchableOpacity style={{backgroundColor: '#F5E415'}} onPress={() =>this.changeData()}>
                            <ShortPost/></TouchableOpacity>)
                        : <LongPost shorten={() => this.setState({short: true})}/>
                        }
                    </View>
                    {this.state.short
                    ?(
                        <View>
                            <View style={{alignItems: 'flex-end'}}>
                                <TouchableOpacity style={{ borderRadius: 30, borderWidth: 2, borderColor: '#F5E415'}}><Text style={{color:'#F5E415', margin: 10}}>SKIP</Text></TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <TouchableOpacity style={{margin: 20}}><Ionicons name="md-checkmark-circle" size={64} color='#F5E415'/></TouchableOpacity>
                                <TouchableOpacity style={{margin: 20}}><Ionicons name="md-close-circle" size={64} color='#F5E415'/></TouchableOpacity>
                            </View>
                        </View>
                    ): null}
                </ImageBackground>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        messages: state.messages,
        post: state.post
    }
};

const mapDispatchToProps = dispatch => {
    return{

        addMessage: () => dispatch(addMessage()),
        deleteMessage: () => dispatch(deleteMessage()),
        changePost: (post) => dispatch(changePost(post)),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);