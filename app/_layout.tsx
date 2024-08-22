import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./(tabs)/Home";
import OptionsScreen from "./(tabs)/Options";
import SetPomodoroScreen from "./(tabs)/SetPomodoro";
import SettingsScreen from "./(tabs)/Settings";

const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Options" component={OptionsScreen} />
        <Stack.Screen name="SetPomodoro" component={SetPomodoroScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
