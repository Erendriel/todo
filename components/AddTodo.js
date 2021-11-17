import React, { useState, useRef } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

export default function AddTodo({submitHandler}) {
  const [text, setText] = useState("");
  const clearInput=()=>{
    setText('');
  }

  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
      style={styles.input} 
      placeholder="new todo..."
      onChangeText={changeHandler} 
      clearButtonMode='always'
      value={text}
      />
      <Button onPress={()=>{submitHandler(text), clearInput()}} title='add todo' color='coral'/>
    </View>
  );
}
const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }

})