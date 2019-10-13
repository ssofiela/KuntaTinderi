import React from "react";
import { View, ScrollView, Button, Text } from "react-native";
import { connect } from "react-redux";
import { addMessage, deleteMessage } from "../store/actions/actions";
import Answer from "../components/Answer";
import QuestionData from "../components/QuestionData";
import colors from "../common/colors";
import Accordion from "react-native-collapsible/Accordion";
import questions from "../data/questions.json";
import answers from "../data/answers.json";

class MyAnswers extends React.Component {
  static navigationOptions = {
    title: "Omat vastaukset"
  };

  constructor(props) {
    super(props);
    this.state = {
      activeQuestions: [],
      questions: questions.questions
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
    return <Answer key={question.title} questionObject={question} />;
  };

  _renderContent = question => {
    console.log(question.id);
    console.log(answers);
    return (
      <QuestionData
        data={answers[question.id.toString()]}
        questionObject={question}
      />
    );
  };

  _updateQuestions = activeQuestions => {
    this.setState({ activeQuestions });
  };

  renderAnswerList() {
    return this.state.questions.map(question => (
      <Answer
        key={question.id}
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
