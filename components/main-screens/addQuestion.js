import React, { useState } from "react";
import {
  NavigationContainer,
  CommonActions,
  useNavigation
} from "@react-navigation/native";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput
} from "react-native";
import { useDispatch } from "react-redux";
import { addQuestion } from "./actions/questions";

function AddQuestionScreen({ route }) {
  const navigation = useNavigation();
  console.log(route.params);
  const answerTypes = route.params.answerTypeArray;

  const [question, setQuestion] = useState("");

  const dispatch = useDispatch();

  const submitQuestion = (question) => dispatch(addQuestion(question));

  return (
    <View
      style={{
        flex: 1,
        alignSelf: "center",
        width: Dimensions.get("window").width,
        backgroundColor: "white"
      }}
    >
      <View
        style={{
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20
        }}
      >
        <Text style={{ fontSize: 18, color: "black" }}>Question</Text>
        <TextInput
          placeholder="Add a new question..."
          defaultValue={question}
          onChangeText={question => setQuestion(question)}
          style={{
            backgroundColor: "lightgray",
            borderRadius: 7,
            fontSize: 20
          }}
        ></TextInput>

        <Text style={{ fontSize: 18, color: "black", marginTop: 40 }}>
          Answer Type
        </Text>
        <View
          style={{
            fontSize: 20,
            borderRadius: 10,
            backgroundColor: "lightgray"
          }}
        >
          {answerTypes.map((type, index) => {
            return <Text key={index}>{type}</Text>;
          })}
        </View>
      </View>
      {/* This can be actually a component as it's identical as in EditQuestionScreen */}
      <TouchableOpacity
        onPress={() => {
          console.log("question", question);
          navigation.dispatch(
            CommonActions.navigate({
              name: "Edit questions",
              // params: {newQuestion: {"possible answer": "scale", "question": question, "visible": true}}
            })
          );
          submitQuestion(question);
        }}
        style={{
          zIndex: 3
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "black",
            alignSelf: "center",
            marginTop: 40,
            borderRadius: 20,
            backgroundColor: "lightgray",
            padding: 10
          }}
        >
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = state => {
  console.log('mapStateToProps', state);
  return {
    questions: state.questionReducer.questionsList
  };
};

const mapDispatchToProps = dispatch => {
  console.log('mapDispatchToProps', state);
  return {
    add: (question) => dispatch(addQuestion(question))
  };
};

// export default connect(mapStateToProps, mapDispatchToProps)(AddQuestionScreen);

export default AddQuestionScreen;

