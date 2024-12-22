import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={require('../assets/images/react-logo.png')} style={styles.logo}></Image>
      <Text>Hello World!</Text>
      <Text>My First React Native cross platform App</Text>
    </View>
  );
}

const styles=StyleSheet.create({
  logo:{
    width:100,
    height:100,
    borderColor:'solid',
    borderWidth:2
  }
})
