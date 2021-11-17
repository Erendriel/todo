import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, onPressHandler }) {
  return (
    <TouchableOpacity
      onPress={() => {
        onPressHandler(item.key);
      }}
    >
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.text}</Text>
        <MaterialIcons name="delete" size={18} color={"#333"} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent:'space-between',
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  itemText:{
      marginLeft:10
  }
});
