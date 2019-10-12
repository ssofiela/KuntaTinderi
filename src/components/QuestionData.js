import React from "react";
import { View, Button, Text } from "react-native";
import { connect } from "react-redux";
import { addMessage, deleteMessage } from "../store/actions/actions";
import { Ionicons } from "@expo/vector-icons";
import colors from "../common/colors";

import { BarChart, Grid, XAxis, YAxis } from "react-native-svg-charts";

const ageGroups = ["10-19", "20-29", "30-39", "40-49", "50-59", "60-69"];

class QuestionData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          height: 200,
          display: "flex",
          flexDirection: "row",
          paddingHorizontal: 20,
          marginTop: 10
        }}
      >
        <YAxis
          data={this.props.data}
          style={{ width: 20 }}
          contentInset={{ top: 10, bottom: 25 }}
          svg={{
            fill: colors.YELLOW,
            fontSize: 10
          }}
          formatLabel={value => `${value}%`}
          min={0}
        />
        <View style={{ flex: 1, flexDirection: "column" }}>
          <BarChart
            style={{ flex: 1 }}
            data={this.props.data}
            svg={{ fill: colors.YELLOW }}
            yMin={0}
            contentInset={{ top: 10, bottom: 10 }}
          >
            <Grid svg={{ stroke: colors.YELLOW, strokeOpacity: 0.5 }} />
          </BarChart>
          <XAxis
            data={this.props.data}
            formatLabel={(value, index) => ageGroups[index]}
            contentInset={{ left: 30, right: 30 }}
            svg={{ fontSize: 10, fill: colors.YELLOW }}
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
)(QuestionData);
