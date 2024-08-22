import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { NavigationProp } from "@react-navigation/native";

export default function OptionsScreen({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
          },
          styles.wrapperCustom,
        ]}
        onPress={() => navigation.navigate("SetPomodoro")}
      >
        <View style={styles.setPomodoro}>
          <MaterialCommunityIcons
            name="timer-outline"
            size={26}
            color="#E59BFA"
          />
          <Text style={styles.text}>Set Your Pomodoro</Text>
        </View>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
          },
          styles.wrapperCustom,
        ]}
        onPress={() => navigation.navigate("Settings")}
      >
        <View style={styles.settings}>
          <AntDesign name="setting" size={26} color="#E59BFA" />
          <Text style={styles.text}>Settings</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Roboto",
    backgroundColor: "#fff",
    paddingTop: 80,
    marginLeft: 10,
  },
  setPomodoro: {
    flexDirection: "row",
    fontSize: 25,
  },
  settings: {
    flexDirection: "row",
    marginTop: 30,
  },
  text: {
    marginLeft: 20,
    fontSize: 18,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
});
