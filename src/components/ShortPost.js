import React from 'react'
import {View, Button, Text, ImageBackground, TouchableOpacity, AsyncStorage} from 'react-native'
import {connect} from 'react-redux'
import {addMessage, deleteMessage} from '../store/actions/actions'
import questions from '../data/questios.json'


class ShortPost extends React.Component {
    // 1C242B tumma väri
    constructor(props){
        super(props);
        this.state = {
            index: 0,
            id: 0
        }
    }
    async componentDidMount() {
        console.log("short", this.props.id)
        await this.getId();
        this.getData()
    }

    async getId() {
        try {

            const newId = await AsyncStorage.getItem('currentId', (id) => id);
            if (newId !== null) {
                const value = parseInt(newId);
                this.setState({id: value});
            }

        } catch (e) {
            console.error(e)
        }
    }

    getData() {
        const list = questions.questions;
        for(let i = 0; i < list.length; i++) {
            const listId = parseInt(list[i].id);
            if (listId === this.props.id) {
                this.setState({index: i});
            }
        }
    }

    render(){
        return(
            <View>
                <View style={{margin: 20}}>
                    <Text style={{fontSize: 38, textAlign: 'center', margin: 20}}>{questions.questions[this.props.id].question}</Text>
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