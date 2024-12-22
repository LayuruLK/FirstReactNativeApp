import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={require('../assets/images/react-logo.png')}></Image>
      <Text>Hello World!</Text>
      <Text>My First React Native cross platform App</Text>
    </View>
  );
}
