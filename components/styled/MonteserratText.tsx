import {StyleSheet, Text} from "react-native";
import React from "react";

const MonteserratText = (props: Text["props"]) => {
  return <Text {...props} style={[props.style, {fontFamily: "montserrat"}]} />;
};

export default MonteserratText;

const styles = StyleSheet.create({});
