import React from "react";
import { View, ScrollView, Button, Text } from "react-native";
import { connect } from "react-redux";
import { addMessage, deleteMessage } from "../store/actions/actions";
import Answer from "../components/Answer";
import QuestionData from "../components/QuestionData";
import colors from "../common/colors";
import Accordion from "react-native-collapsible/Accordion";

class MyAnswers extends React.Component {
  static navigationOptions = {
    title: "Omat vastaukset"
  };

  constructor(props) {
    super(props);
    this.state = {
      activeQuestions: [],
      questions: [
        {
          id: 123,
          answer: true,
          title: "mp nopeusrajotukset?",
          data: [20, 25, 48, 30, 52, 27]
        },
        {
          id: 234,
          answer: false,
          title: "mp kissat?",
          data: [50, 85, 76, 35, 70, 69]
        },
        {
          id: 345,
          answer: true,
          title: "mp koirat?",
          data: [20, 25, 48, 30, 52, 27]
        },
        {
          id: 1234,
          answer: true,
          title: "mp nopeusrajotukset?",
          data: [20, 25, 48, 30, 52, 27]
        },
        {
          id: 2344,
          answer: false,
          title: "mp kissat?",
          data: [50, 85, 76, 35, 70, 69]
        },
        {
          id: 3454,
          answer: true,
          title: "mp koirat?",
          data: [20, 25, 48, 30, 52, 27]
        },
        {
          id: 1235,
          answer: true,
          title: "mp nopeusrajotukset?",
          data: [20, 25, 48, 30, 52, 27]
        },
        {
          id: 2345,
          answer: false,
          title: "mp kissat?",
          data: [50, 85, 76, 35, 70, 69]
        },
        {
          id: 3455,
          answer: true,
          title: "mp koirat?",
          data: [20, 25, 48, 30, 52, 27]
        },
        {
          id: 12351,
          answer: true,
          title: "mp nopeusrajotukset?",
          data: [20, 25, 48, 30, 52, 27]
        },
        {
          id: 23415,
          answer: false,
          title: "mp kissat?",
          data: [50, 85, 76, 35, 70, 69]
        },
        {
          id: 34155,
          answer: true,
          title: "mp koirat?",
          data: [20, 25, 48, 30, 52, 27]
        }
      ]
    };
  }

  _renderSectionTitle = section => {
    return (
      <View
        style={{ borderBottomWidth: 1, borderBottomColor: colors.BORDER_GRAY }}
      ></View>
    );
  };

  _renderHeader = question => {
    return (
      <Answer
        key={question.title}
        answer={question.answer}
        title={question.title}
      />
    );
  };

  _renderContent = question => {
    return <QuestionData data={question.data} />;
  };

  _updateQuestions = activeQuestions => {
    this.setState({ activeQuestions });
  };

  renderAnswerList() {
    return this.state.questions.map(question => (
      <Answer
        key={question.title}
        answer={question.answer}
        title={question.title}
      />
    ));
  }

  render() {
    return (
      <ScrollView
        style={{ disaply: "flex", flex: 1, backgroundColor: colors.DARK_GRAY }}
      >
        <Accordion
          sections={this.state.questions}
          activeSections={this.state.activeQuestions}
          renderSectionTitle={this._renderSectionTitle}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateQuestions}
        />
      </ScrollView>
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
)(MyAnswers);
