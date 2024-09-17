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
      <View>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#f2def8" : "white",
            },
            styles.wrapperCustom,
          ]}
          onPress={() => navigation.navigate("SetPomodoro")}
        >
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="timer-outline"
              size={26}
              color="#E59BFA"
            />
            <Text style={styles.text}>Set Your Pomodoro</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.settings}>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#f2def8" : "white",
            },
            styles.wrapperCustom,
          ]}
          onPress={() => navigation.navigate("Settings")}
        >
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="setting" size={26} color="#E59BFA" />
            <Text style={styles.text}>Settings</Text>
          </View>
        </Pressable>
      </View>
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
    marginRight: 10,
  },
  settings: {
    marginTop: 30,
  },
  text: {
    marginLeft: 20,
    fontSize: 18,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 10,
  },
});
