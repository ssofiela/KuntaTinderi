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
    this.state = {
      prizes: prizes.prizes
    };
  }

  usePrize = usedPrize => {
    this.setState(prevState => {
      return {
        prizes: prevState.prizes.filter(prize => {
          return prize.name != usedPrize;
        })
      };
    });
  };

  renderPrizes = () => {
    return this.state.prizes.map(prize => {
      return (
        <ClickablePrize
          prize={prize}
          key={prize.name}
          openDetails={() =>
            this.props.navigation.navigate("PrizeDetail", {
              prize,
              usePrize: prizeName => this.usePrize(prizeName)
            })
          }
        />
      );
    });
  };

  render() {
    return (
      <View style={{ backgroundColor: colors.DARK_GRAY, flex: 1 }}>
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
