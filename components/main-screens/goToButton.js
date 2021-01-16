import React from "react";
import { NavigationContainer, CommonActions, useNavigation } from "@react-navigation/native";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TextInput,
  Image,
  Button
} from "react-native";

// https://icons.expo.fyi/FontAwesome/search
// https://icons.expo.fyi/
// https://www.youtube.com/watch?v=C4ikFaP0a5o
import { FontAwesome } from "@expo/vector-icons";

// try also https://reactnativeexample.com/font-awesome-icons-for-react-native/

//  go to button
//https://reactnavigation.org/docs/connecting-navigation-prop/
/**
 * 
 * @screenName string
 * @data object = {question, questionNumber, allQuestionsSum, iconName: "string"}
 * 
 */
function GoToButton({ screenName, data }) {
  const navigation = useNavigation();
  const iconName = data.iconName;
  return (
    <View style={{ flex: 1, alignItems: "center",
    }}>
      <FontAwesome.Button
      
        style={{marginRight: 0}}
        name={iconName}
        backgroundColor="gray"
        // size={15}
        color="black"
        title={`Go to ${screenName}`}
        onPress={() => navigation.navigate(screenName, data)}
      />
    </View>
  );
}

export default GoToButton;