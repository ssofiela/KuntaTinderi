import React from 'react'
import {View, Button, Text} from 'react-native'
import {connect} from 'react-redux'
import {addMessage, deleteMessage} from '../store/actions/actions'
import Answer from '../components/Answer'
import colors from '../common/colors'

class Prizes extends React.Component {

    static navigationOptions = {
        title: 'Palkinnot',
    }
    
    constructor(props){
        super(props)
        this.state = {
           
        }
    }


    render(){
        return(
            <View>
                <Text style={{fontSize: 40, color: colors.YELLOW}}>Prizes</Text>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Prizes);