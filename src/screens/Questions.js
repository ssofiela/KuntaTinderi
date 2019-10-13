import React from "react";
import {
  View,
  Button,
  Text,
  ImageBackground,
  TouchableOpacity,
  AsyncStorage,
  Dimensions,
  Platform
} from "react-native";
import { connect } from "react-redux";
import {
  addMessage,
  deleteMessage,
  changePost
} from "../store/actions/actions";
import backgroundTang from "../images/background.png";
import ShortPost from "../components/ShortPost";
import LongPost from "../components/LongPost";
import { Ionicons } from "@expo/vector-icons";
import QuestionsEnd from "./QuestionsEnd";
import questions from "../data/questions.json";
import GestureRecognizer from "react-native-swipe-gestures";
import Swiper from "react-native-deck-swiper";

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      short: true,
      id: 1
    };
  }
  async componentDidMount() {
    this.setState({ short: true });
    await this.getCurrentId();
  }

  async getCurrentId() {
    try {
      const newId = await AsyncStorage.getItem("currentId", id => {
        if (id !== null) {
          const value = parseInt(id);

          this.setState({ id: value });
        }
      });
    } catch (e) {
      console.error(e);
    }
  }

  static navigationOptions = {
    title: "Kysymykset"
  };

  changeData() {
    this.setState({ short: false });
  }

  async storeData(value) {
    console.log("storefat");
    const id = this.state.id;
    const strId = id.toString();
    const srtValue = value.toString();
    const stateValue = this.state.id + 1;
    const stateValueToStr = stateValue.toString();
    try {
      await AsyncStorage.setItem("question" + strId, srtValue, () => {});
      await AsyncStorage.setItem("currentId", stateValueToStr, () => {
        const value1 = this.state.id + 1;
        this.setState({ id: value1 });
      });
    } catch (e) {
      console.error("This is storeData error", e);
    }
  }

  changeQuestion(value) {
    this.storeData(value);
  }
  wantedPage(continues) {
    if (continues) {
      if (this.state.short) {
        return (
          <Swiper
            cards={questions.questions.slice(
              this.state.id - 1,
              questions.questions.length
            )}
            renderCard={question => {
              console.log(
                questions.questions.slice(
                  this.state.id - 1,
                  questions.questions.length
                )
              );
              return (
                <View style={{ backgroundColor: "#F5E415", margin: 30 }}>
                  <ShortPost id={this.state.id} question={question} />
                </View>
              );
            }}
            onSwipedLeft={() => this.sendHate()}
            onSwipedRight={() => this.sendLike()}
            onTapCard={() => this.tap()}
            verticalSwipe={false}
            useViewOverflow={Platform.OS === "ios"}
          />
        );
      } else {
        return (
          <LongPost
            id={this.state.id}
            shorten={() => this.setState({ short: true })}
          />
        );
      }
    } else {
      return (
        <QuestionsEnd
          openMyAnswers={() => this.props.navigation.navigate("MyAnswers")}
        />
      );
    }
  }

  sendLike() {
    this.changeQuestion(1);
  }
  sendHate() {
    this.changeQuestion(0);
  }
  tap() {
    this.setState({ short: false });
  }

  render() {
    let continues = true;
    if (this.state.id === 8) {
      continues = false;
    }

    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={backgroundTang} style={{ flex: 3 }}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#000000"
            }}
          >
            {this.wantedPage(continues)}
          </View>
        </ImageBackground>

        {this.state.short && continues !== false ? (
          <View style={{ backgroundColor: "#1C242B", flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TouchableOpacity
                style={{ margin: 20 }}
                onPress={() => this.changeQuestion(0)}
              >
                <Ionicons name="md-close-circle" size={100} color="#F5E415" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 400,
                  borderWidth: 2,
                  borderColor: "#F5E415",
                  marginBottom: 70
                }}
                onPress={() => this.changeQuestion(2)}
              >
                <Text style={{ color: "#F5E415", margin: 20, fontSize: 24 }}>
                  SKIP
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ margin: 20 }}
                onPress={() => this.changeQuestion(1)}
              >
                <Ionicons
                  name="md-checkmark-circle"
                  size={100}
                  color="#F5E415"
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages,
    post: state.post
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMessage: () => dispatch(addMessage()),
    deleteMessage: () => dispatch(deleteMessage()),
    changePost: post => dispatch(changePost(post))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);
