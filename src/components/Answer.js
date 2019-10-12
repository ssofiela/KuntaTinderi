import React from "react";
import { View, Button, Text } from "react-native";
import { connect } from "react-redux";
import { addMessage, deleteMessage } from "../store/actions/actions";
import { Ionicons } from "@expo/vector-icons";
import colors from "../common/colors";

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: colors.DARK_GRAY,

          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Text
          style={{ color: colors.YELLOW, marginHorizontal: 10, fontSize: 20 }}
        >
          {this.props.title}
        </Text>
        <Ionicons
          name={this.props.answer ? "md-checkmark-circle" : "md-close-circle"}
          size={48}
          color={colors.YELLOW}
          style={{ marginRight: 40, marginTop: 15, marginBottom: 15 }}
        />
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
