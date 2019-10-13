import React from "react";
import {
  View,
  Button,
  Text,
  AsyncStorage,
  Image,
  TouchableOpacity
} from "react-native";
import { NavigationEvents } from "react-navigation";
import { connect } from "react-redux";
import { addMessage, deleteMessage } from "../store/actions/actions";
import { Ionicons } from "@expo/vector-icons";
import colors from "../common/colors";
import { answerValueToBoolean } from "../common/util";
import citymarket from "../images/kcitymarket.png";
import kotipizza from "../images/kotipizza.png";
import kesport from "../images/kesport.jpg";

class ClickablePrize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  getImage = name => {
    switch (name) {
      case "citymarket":
        return citymarket;
      case "kotipizza":
        return kotipizza;
      case "kesport":
        return kesport;
    }
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.openDetails}
        style={{
          width: "45%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxHeight: 120,
          marginHorizontal: 10,
          marginVertical: 10
        }}
      >
        <Image
          source={this.getImage(this.props.prize.image)}
          resizeMode="contain"
          style={{ width: "100%", maxHeight: 120 }}
        />
      </TouchableOpacity>
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
)(ClickablePrize);
