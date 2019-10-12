import React from 'react'
import {View, Button, Text, ImageBackground, TouchableOpacity, AsyncStorage} from 'react-native'
import {connect} from 'react-redux'
import {addMessage, deleteMessage, changePost} from '../store/actions/actions'
import backgroundTang from '../images/background.png'
import ShortPost from '../components/ShortPost';
import LongPost from '../components/LongPost';
import { Ionicons } from '@expo/vector-icons';
import questions from '../data/questios.json'

class Questions extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            short: true,
            id: 1
        };

    }
    async componentDidMount () {
        console.log("DID")
        this.setState({short: true});
        await this.getCurrentId()
    }
    
    async getCurrentId() {
        try {
           const newId = await AsyncStorage.getItem('currentId', (id) => {
               if (id !== null) {
                   const value = parseInt(id)
                   this.setState({id: value});
               }
           });


        } catch (e) {
            console.error(e)
        }
    }

    static navigationOptions = {
        title: 'Kysymykset',
    };


    changeData() {
        this.setState({short: false});
    }

    async storeData(value) {
        const id = this.state.id;
        const strId = id.toString();
        const srtValue = value.toString();
        const stateValue = this.state.id +1;
        const stateValueToStr = stateValue.toString()
        try {
            await AsyncStorage.setItem('question' + strId, srtValue , ()=>{});
            await AsyncStorage.setItem('currentId', stateValueToStr, () => {
                const value1 = this.state.id +1;
                this.setState({id: value1});
            })
        } catch (e) {
            console.error("This is storeData error", e)
        }
    }

    changeQuestion(value) {
        this.storeData(value);


    }


    render(){
        console.log("this.state questions", this.state.id)
        return(
            <View>
                <ImageBackground source={backgroundTang} style={{width: '100%', height: '100%'}}>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>

                        {this.state.short
                        ? ( <TouchableOpacity style={{backgroundColor: '#F5E415'}} onPress={() =>this.changeData()}>
                                <ShortPost id={this.state.id}/>
                            </TouchableOpacity>)
                        : <LongPost shorten={() => this.setState({short: true})}/>
                        }
                    </View>
                    {this.state.short
                    ?(
                        <View>
                            <View style={{alignItems: 'flex-end'}}>
                                <TouchableOpacity style={{ borderRadius: 30, borderWidth: 2, borderColor: '#F5E415'}} onPress={() =>this.changeQuestion(2)}><Text style={{color:'#F5E415', margin: 10}}>SKIP</Text></TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <TouchableOpacity style={{margin: 20}} onPress={() => this.changeQuestion(0)}><Ionicons name="md-close-circle" size={64} color='#F5E415'/></TouchableOpacity>
                                <TouchableOpacity style={{margin: 20}} onPress={() => this.changeQuestion(1)}><Ionicons name="md-checkmark-circle" size={64} color='#F5E415'/></TouchableOpacity>
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