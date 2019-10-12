import React from 'react'
import {View, Button, Text, ImageBackground, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {addMessage, deleteMessage} from '../store/actions/actions'
import questions from '../data/questios.json'


class ShortPost extends React.Component {
    // 1C242B tumma väri
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
                this.setState({index: i});
            }
        }
    }

    render(){
        return(
            <View>
                <View style={{margin: 20}}>
                    <Text style={{fontSize: 38, textAlign: 'center', margin: 20}}>{questions.questions[this.state.index].question}</Text>
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