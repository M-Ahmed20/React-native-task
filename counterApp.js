import React, { useState } from 'react';
import { View ,Text, Button, StyleSheet} from "react-native";


export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.view}>
       <Button onPress={() => setCount(count + 1)} title="Increase"/>
      <Text>   </Text>
      <Text style={styles.text}>{count}</Text>
      <Text>  </Text>
      <Button onPress={() => setCount(count - 1)} title="Decrease"/>
    </View>
  )
}


const styles = StyleSheet.create({
  view: {
      margin: 100,
      alignItems: 'center'
  },
text:{
  fontSize:30
}
});