import React from "react";
import { View, Button, Text, ScrollView, ImageBackground } from "react-native";
import { connect } from "react-redux";
import { addMessage, deleteMessage } from "../store/actions/actions";
import Answer from "../components/Answer";
import colors from "../common/colors";
import prizes from "../data/prizes.json";
import ClickablePrize from "../components/ClickablePrize";
import background from "../images/background.png";

class Prizes extends React.Component {
  static navigationOptions = {
    title: "Palkinnot"
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderPrizes = () => {
    return prizes.prizes.map(prize => {
      console.log(prize);
      return (
        <ClickablePrize
          prize={prize}
          openDetails={() =>
            this.props.navigation.navigate("PrizeDetail", { prize })
          }
        />
      );
    });
  };

  render() {
    return (
      <View>
        <ImageBackground
          source={background}
          style={{ width: "100%", height: "100%" }}
        >
          {prizes.prizes.length > 0 ? (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                maxHeight: 120
              }}
            >
              {this.renderPrizes()}
            </View>
          ) : (
            <View
              style={{
                backgroundColor: colors.DARK_GRAY,
                width: "60%",
                height: "60%"
              }}
            >
              <Text style={{ fontSize: 40, color: colors.YELLOW }}>
                Vaikuta ansaitaksesi palkintoja!
              </Text>
            </View>
          )}
        </ImageBackground>
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
