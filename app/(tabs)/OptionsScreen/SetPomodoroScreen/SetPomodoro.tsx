import { Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import styles from "./styles";

export default function SetPomodoroScreen() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 150 }}>
        <TouchableOpacity
          onPress={() => toggleSection("focus")}
          activeOpacity={0.9}
          style={styles.section}
        >
          <Text style={styles.focus}>Focus</Text>
          <AntDesign
            name={activeSection === "focus" ? "down" : "up"}
            size={20}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => toggleSection("shortBreak")}
          activeOpacity={0.9}
          style={styles.section}
        >
          <Text style={styles.title}>Short Break</Text>
          <AntDesign
            name={activeSection === "shortBreak" ? "down" : "up"}
            size={20}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => toggleSection("longBreak")}
          activeOpacity={0.9}
          style={styles.section}
        >
          <Text style={styles.title}>Long Break</Text>
          <AntDesign
            name={activeSection === "longBreak" ? "down" : "up"}
            size={20}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => toggleSection("pomodoros")}
          activeOpacity={0.9}
          style={styles.section}
        >
          <Text style={styles.title}>Pomodoros</Text>
          <AntDesign
            name={activeSection === "pomodoros" ? "down" : "up"}
            size={20}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
