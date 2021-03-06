import React from "react";
import { View } from "react-native";
import {
  RkText,
  RkButton,
  RkComponent,
  RkStyleSheet
} from "react-native-ui-kitten";
import { FontAwesome } from "../../assets/icons";

export class ClassBar extends RkComponent {
  componentName = "ClassBar";
  typeMapping = {
    container: {},
    section: {},
    icon: {},
    label: {}
  };
  static data = {
    likes: 18,
    comments: 26,
    shares: 5
  };

  constructor(props) {
    super(props);
    this.state = {
      currentView: "childView"
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentView != nextProps.currentView) {
      this.state.currentView = nextProps.currentView;
    }
  }

  render() {
    const { container, section, icon, label } = this.defineStyles();

    const likes = this.props.showLabel ? " 活动 " : "";
    const comments = this.props.showLabel ? " 作业 " : "";
    const shares = this.props.showLabel ? " 老师私信 " : "";

    let firstStyle, secondStyle, thirdStyle;

    let activeStyle = "awesome primary";
    let hintColorStyle = "awesome hintColor";

    if (this.state.currentView == "childView") {
      firstStyle = activeStyle;
      secondStyle = hintColorStyle;
      thirdStyle = hintColorStyle;
    } else if (this.state.currentView == "homeWorkView") {
      firstStyle = hintColorStyle;
      secondStyle = activeStyle;
      thirdStyle = hintColorStyle;
    } else if (this.state.currentView == "letterView") {
      firstStyle = hintColorStyle;
      secondStyle = hintColorStyle;
      thirdStyle = activeStyle;
    }

    return (
      <View style={container}>
        <View style={section}>
          <RkButton
            rkType="clear"
            style={styles.buttonSection}
            onPress={this.props.onChildButtonPressed}
          >
            <RkText rkType={firstStyle} style={styles.buttonSize}>
              {FontAwesome.user}
            </RkText>
            <RkText rkType={`${firstStyle} primary4`}>{likes}</RkText>
          </RkButton>
        </View>
        <View style={section}>
          <RkButton
            rkType="clear"
            style={styles.buttonSection}
            onPress={this.props.onHomeWorkButtonPressed}
          >
            <RkText rkType={secondStyle} style={styles.buttonSize}>
              {FontAwesome.homework}
            </RkText>
            <RkText rkType={`${secondStyle} primary4`}>{comments}</RkText>
          </RkButton>
        </View>
        <View style={section}>
          <RkButton
            rkType="clear"
            style={styles.buttonSection}
            onPress={this.props.onLetterButtonPressed}
          >
            <RkText rkType={thirdStyle} style={styles.buttonSize}>
              {FontAwesome.letter}
            </RkText>
            <RkText rkType={`${thirdStyle} primary4`}>{shares}</RkText>
          </RkButton>
        </View>
      </View>
    );
  }
}

const styles = RkStyleSheet.create(theme => ({
  buttonSize: {
    fontSize: 24
  },

  buttonSection: {
    flexDirection: "column"
  }
}));
