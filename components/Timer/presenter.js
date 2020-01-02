import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";

function formatTime(time){
    let minutes = Math.floor(time/60);
    time -= minutes * 60;
    let seconds = parseInt(time % 60, 10);
    return `${minutes < 10 ? `0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}`:seconds}`;
}

class Timer extends Component {
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      //start the interval
      const timerInterval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);
      this.setState({ timerInterval });
    } else if (currentProps.isPlaying && !nextProps.isPlaying) {
      //stop the interval
      clearInterval(this.state.timerInterval);
    }
  }
  render() {
    console.log(this.props);
    const {
      isPlaying,
      elapsedTime,
      timeDuration,
      startTimer,
      restartTimer,
      refreshTimer
    } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
          <Text style={styles.time}>{formatTime(timeDuration - elapsedTime)}</Text>
        </View>

        {!isPlaying ? (
          <View style={styles.lower}>
            <Button iconName="play-circle" onPress={startTimer} />
            {elapsedTime!=0 && <Button iconName="refresh" onPress={refreshTimer} />}
          </View>
        ) : (
          <View style={styles.lower}>
            <Button iconName="pause-circle" onPress={restartTimer} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  upper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  lower: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row'
  },
  time: {
    color: "#FFB9A9",
    fontSize: 100,
    fontWeight: "100",
    fontWeight: "bold"
  }
});

export default Timer;
