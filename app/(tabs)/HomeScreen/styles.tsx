import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Roboto",
  },
  title: {
    fontWeight: "900",
    fontSize: 30,
    paddingTop: 40,
    paddingLeft: 20,
  },
  circle: {
    width: 270,
    height: 270,
    borderRadius: 200,
    borderStyle: "solid",
    borderWidth: 15,
    alignSelf: "center",
    marginTop: 30,
  },
  settingsBtn: {
    position: "absolute",
    left: 20,
    top: 47,
  },
  time: {
    fontSize: 50,
    textAlign: "center",
    marginTop: 85,
    fontWeight: "700",
  },
  circles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },
  theCircle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderStyle: "solid",
    borderWidth: 2,
    margin: 8,
  },
  startBtn: {
    width: 70,
    height: 70,
    backgroundColor: "#f2def8",
    borderRadius: 40,
    alignSelf: "center",
    marginTop: 50,
    paddingTop: 22,
  },
  circleTitle: {
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 200,
  },
});
