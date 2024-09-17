import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OptionsScreen from "./(tabs)/OptionsScreen/Options";
import SetPomodoroScreen from "./(tabs)/OptionsScreen/SetPomodoroScreen/SetPomodoro";
import SettingsScreen from "./(tabs)/OptionsScreen/SettingsScreen/Settings";
import HomeScreen from "./(tabs)/HomeScreen/Home";

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
