import React from 'react'
import {View, Button, Text} from 'react-native'
import {connect} from 'react-redux'
import {addMessage, deleteMessage} from '../store/actions/actions'
import Answer from '../components/Answer'

class MyAnswers extends React.Component {

    static navigationOptions = {
        title: 'Omat vastaukset',
    }
    
    constructor(props){
        super(props)
        this.state = {
            questions: [
                {
                    answer: true,
                    title: "mp nopeusrajotukset?" 
                },
                {
                    answer: false,
                    title: "mp kissat?" 
                },
                {
                    answer: true,
                    title: "mp koirat?" 
                }

            ]
        }
    }

    renderAnswerList(){
        return this.state.questions.map(question => <Answer answer={question.answer} title={question.title}/>)
    }

    render(){
        return(
            <View>

                {this.renderAnswerList()}
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(MyAnswers);