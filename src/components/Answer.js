import React from "react";
import { View, Button, Text, AsyncStorage } from "react-native";
import { NavigationEvents } from "react-navigation";
import { connect } from "react-redux";
import { addMessage, deleteMessage } from "../store/actions/actions";
import { Ionicons, Feather } from "@expo/vector-icons";
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
          <Feather
            name={this.props.active ? "chevron-up" : "chevron-down"}
            size={48}
            color={colors.YELLOW}
          />
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
