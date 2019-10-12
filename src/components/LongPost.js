import React from 'react'
import {View, Button, Text, ImageBackground, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import {addMessage, deleteMessage, changePost} from '../store/actions/actions'
import { ScrollView } from "react-navigation";
import { AntDesign } from '@expo/vector-icons';
import questions from '../data/questios.json'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


class ShortPost extends React.Component {
    // 1C242B tumma väri
    // false, true, skip, undefined
    constructor(props){
        super(props);
        this.state = {
            index: 0
        }
    }

    componentDidMount() {
        this.getData()
    }


    getData() {
        const list = questions.questions;
        for(let i = 0; i < list.length; i++) {
            if (list[i].id === this.props.id) {
                this.setState({index: i})
            }
        }
    }

    render(){
        const screenWidth = Dimensions.get('window').width;
        return(
            <View>
                <ScrollView>
                    <View style={{margin: 20, flexDirection: 'column', backgroundColor: '#F5E415'}}>
                        <Text style={{fontSize: 38, textAlign: 'center', margin: 20}}>{questions.questions[this.state.index].question}</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{fontSize: 26, fontWeight: 'bold', marginLeft: 10}}>Tarkempi kuvaus:</Text>
                            <Text style={{marginRight: 20, marginLeft: 20, marginTop: 10, marginBottom: 40, fontSize: 22}}>{questions.questions[this.state.index].description}</Text>
                        </View>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: -10, left: screenWidth/2-30}}>
                        <TouchableOpacity><AntDesign name="upcircle" size={64} color='#000'/></TouchableOpacity>
                    </View>
                    <GestureRecognizer onSwipeUp={() =>this.props.shorten()}>
                        <View style={{width: '100%', height: '100%', backgroundColor: 'transparent', marginTop: -200}}>
                        </View>

                    </GestureRecognizer>
                </ScrollView>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    backButton: {
        borderRadius: 400,
        height: 50,
        width: 50,
        borderWidth: 2,
        borderColor: '#F5E415',
        backgroundColor: '#F5E415',
    },
});

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
        changePost: (post) => dispatch(changePost(post))

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShortPost);