import React from "react";
import { View, Button, Text, AsyncStorage } from "react-native";
import { NavigationEvents } from "react-navigation";
import { connect } from "react-redux";
import { addMessage, deleteMessage } from "../store/actions/actions";
import { Ionicons } from "@expo/vector-icons";
import colors from "../common/colors";
import { answerValueToBoolean } from "../common/util";

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerValue: 3
    };
  }

  componentDidMount() {
    this.setState({ answerValue: this.getAnswer() });
  }

  getAnswer = async () => {
    try {
      await AsyncStorage.getItem(
        "answer" + this.props.questionObject.id,
        answer => {
          return answer;
        }
      );
    } catch (e) {
      console.error(e);
    }
  };

  getIcon = answerValue => {
    switch (answerValue) {
      case 0:
        return "md-close-circle";
      case 1:
        return "md-checkmark-circle";
    }
  };

  render() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: colors.DARK_GRAY,
          alignItems: "center",
          justifyContent: "space-between",
          height: 80
        }}
      >
        <Text
          style={{
            color: colors.YELLOW,
            marginHorizontal: 10,
            fontSize: 20,
            width: "70%",
            fontWeight: "bold"
          }}
        >
          {this.props.questionObject.question}
        </Text>
        <View style={{ marginRight: 40 }}>
          {this.state.answerValue < 2 ? (
            <Ionicons
              name={this.getIcon(this.getAnswer())}
              size={48}
              color={colors.YELLOW}
            />
          ) : (
            <Text style={{ color: colors.YELLOW, fontSize: 16 }}>SKIP</Text>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMessage: () => dispatch(addMessage()),
    deleteMessage: () => dispatch(deleteMessage())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Answer);
