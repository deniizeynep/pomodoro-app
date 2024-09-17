import {
  View,
  Text,
  TouchableOpacity,
  DrawerLayoutAndroid,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useRef, useState } from "react";
import styles from "./styles";

const focusTimeMinutes = 0.1 * 60 * 1000;
const breakTimeMinutes = 0.1 * 60 * 1000;

import { NavigationProp } from "@react-navigation/native";
import OptionsScreen from "../OptionsScreen/Options";

export default function HomeScreen({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  const drawer = useRef<DrawerLayoutAndroid>(null);

  const [timerCount, setTimerCount] = useState<number>(focusTimeMinutes);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(
    null
  );
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timerMode, setTimerMode] = useState<"FOCUS" | "Break">("FOCUS");

  useEffect(() => {
    if (timerCount === 0) {
      if (timerMode === "FOCUS") {
        setTimerMode("Break");
        setTimerCount(breakTimeMinutes);
      } else {
        setTimerMode("FOCUS");
        setTimerCount(focusTimeMinutes);
      }
      stopTimer();
    }
  }, [timerCount]);

  const startTimer = () => {
    const id = setInterval(() => setTimerCount((prev) => prev - 1000), 1000);
    setTimerInterval(id);
    setIsTimerRunning(true);
  };

  const stopTimer = () => {
    if (timerInterval != null) clearInterval(timerInterval);
    setIsTimerRunning(false);
  };

  const timerDate = new Date(timerCount);

  const formatTimer =
    timerDate.getMinutes().toString().padStart(2, "0") +
    ":" +
    timerDate.getSeconds().toString().padStart(2, "0");

  const backgroundColor = timerMode === "FOCUS" ? "#fff" : "#E59BFA";
  const color = timerMode === "FOCUS" ? "#E59BFA" : "#fff";
  const borderColor = timerMode === "FOCUS" ? "#E59BFA" : "#fff";

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={250}
      renderNavigationView={() => <OptionsScreen navigation={navigation} />}
    >
      <View
        style={{
          ...styles.container,
          backgroundColor,
        }}
      >
        <View style={{ display: "flex" }}>
          <TouchableOpacity
            style={styles.settingsBtn}
            onPress={() => drawer.current?.openDrawer()}
          >
            <Ionicons name="menu-sharp" size={35} color="#E59BFA" />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.circleTitle}>
            {timerMode === "FOCUS" ? "Focus" : "Break"} Time
          </Text>
        </View>
        <View
          style={{
            ...styles.circle,
            borderColor,
          }}
        >
          <Text style={styles.time}>{formatTimer}</Text>
        </View>
        <View style={styles.circles}>
          <View style={{ ...styles.theCircle, borderColor }}></View>
          <View style={{ ...styles.theCircle, borderColor }}></View>
          <View style={{ ...styles.theCircle, borderColor }}></View>
          <View style={{ ...styles.theCircle, borderColor }}></View>
        </View>
        <View>
          <TouchableOpacity
            onPress={isTimerRunning ? stopTimer : startTimer}
            style={styles.startBtn}
            activeOpacity={0.7}
          >
            <AntDesign
              style={{ textAlign: "center" }}
              name={isTimerRunning ? "pause" : "caretright"}
              size={26}
              color="#E59BFA"
            />
          </TouchableOpacity>
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
}
