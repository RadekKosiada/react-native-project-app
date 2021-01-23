import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  Dimensions
} from "react-native";
// import { Divider } from 'react-native-elements';

const SettingsButton = ({ navigation, route }) => {
  console.log("SETTINGS ROUTE", route);
  return (
    <TouchableOpacity>
      <Text style={styles.text}>Placeholder</Text>    
    </TouchableOpacity>
  );
};

function SettingsStackScreen() {
 
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Settings} />

    </SettingsStack.Navigator>
  );
}

const Settings = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={styles.header}>Settings</Text>
      <View style={styles.subView}>
        <SettingsButton
          
        />
        <SettingsButton />
        <SettingsButton />
        <SettingsButton />

        <TouchableOpacity>
          <Text style={styles.text}>Edit questions</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.text}>Calendar preferences</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.text}>Delete data</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.text}>Contact us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {},
  header: {
    color: "black",
    fontSize: 22,
    marginTop: 30
  },
  subView: {
    marginTop: 60,
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "flex-start"
  },
  text: {
    marginLeft: 30,
    marginTop: 20,
    color: "black",
    fontSize: 22
  }
});

export default Settings;
