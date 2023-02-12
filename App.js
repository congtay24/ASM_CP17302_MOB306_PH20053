import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Profile from "./Screens/Profile";
import Profile2 from "./Screens/Profile2";
import EditProfile from "./Screens/EditProfile";
import AddShop from "./Screens/AddShop";
import UpdateShop from "./Screens/UpdateShop";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Profile2" component={Profile2} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="AddShop" component={AddShop} />
          <Stack.Screen name="UpdateShop" component={UpdateShop} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
