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
    this.state = {};
  }

  componentDidMount() {
    this.setState({});
  }

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
          height: 80,
          margin: 10
        }}
      >
        <Text
          style={{
            color:
              this.props.questionObject.answer < 2
                ? colors.YELLOW
                : colors.DISABLED,
            marginHorizontal: 10,
            fontSize: 20,
            width: "70%",
            fontWeight: "bold"
          }}
        >
          {this.props.questionObject.question}
        </Text>
        <View style={{ marginRight: 40 }}>
          {this.props.questionObject.answer < 2 ? (
            <Ionicons
              name={this.getIcon(this.props.questionObject.answer)}
              size={32}
              color={colors.YELLOW}
            />
          ) : (
            <Text
              style={{
                color: colors.DISABLED,
                fontSize: 16,
                fontWeight: "bold"
              }}
            >
              SKIP
            </Text>
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
