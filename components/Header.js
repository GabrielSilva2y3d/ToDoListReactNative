import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Do It!</Text>
      <View style={styles.headerIconContainer}>
        <Image
          source={require("../assets/mission.png")}
          style={styles.headerIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000",
    height: 80,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
  headerIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  headerIcon: {
    width: 50,
    height: 50,
  },
});

export default Header;
