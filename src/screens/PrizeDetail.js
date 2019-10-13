import React from "react";
import { View, Button, Text, ScrollView, ImageBackground } from "react-native";
import { connect } from "react-redux";
import { addMessage, deleteMessage } from "../store/actions/actions";
import Answer from "../components/Answer";
import colors from "../common/colors";
import prizes from "../data/prizes.json";
import ClickablePrize from "../components/ClickablePrize";
import background from "../images/background.png";
import { TouchableOpacity } from "react-native-gesture-handler";

class Prizes extends React.Component {
  static navigationOptions = {
    title: "Palkinnot"
  };

  constructor(props) {
    super(props);
    this.state = {
      pressedOnce: false
    };
  }

  render() {
    return (
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.DARK_GRAY,
          flex: 1
        }}
      >
        <Text
          style={{ fontSize: 40, color: colors.YELLOW, fontWeight: "bold" }}
        >
          {this.props.navigation.getParam("prize").name}
        </Text>
        <Text
          style={{ fontSize: 40, color: colors.YELLOW, fontWeight: "bold" }}
        >
          {this.props.navigation.getParam("prize").value}
        </Text>

        <Text
          style={{ fontSize: 20, color: colors.YELLOW, fontWeight: "bold" }}
        >
          {this.props.navigation.getParam("prize").details}
        </Text>

        <Text
          style={{ fontSize: 20, color: colors.YELLOW, fontWeight: "bold" }}
        >
          Etu on voimassa {this.props.navigation.getParam("prize").validUntil}{" "}
          asti
        </Text>
        <View style={{ marginTop: 20 }}>
          {this.state.pressedOnce && (
            <Text
              style={{
                fontSize: 20,
                color: colors.YELLOW,
                fontWeight: "bold"
              }}
            >
              Oletko varma?
            </Text>
          )}
          <TouchableOpacity
            style={{
              backgroundColor: colors.DARK_GRAY,
              borderWidth: 2,
              borderColor: colors.YELLOW
            }}
            onPress={
              this.state.pressedOnce
                ? () => this.props.navigation.goBack()
                : () => this.setState({ pressedOnce: true })
            }
          >
            <Text
              style={{
                fontSize: 20,
                color: colors.YELLOW,
                fontWeight: "bold",
                margin: 10
              }}
            >
              {this.state.pressedOnce ? "Olen varma" : "Lunasta"}
            </Text>
          </TouchableOpacity>
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
)(Prizes);
