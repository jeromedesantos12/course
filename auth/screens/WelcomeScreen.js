import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../store/auth-context";

import axios from "axios";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState("");

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  // kalo di firebase cukup di url aja kirim token, ga perlu sampai pake header
  useEffect(() => {
    async function getMessage() {
      const response = await axios.get(
        "https://react-native-course-9a67b-default-rtdb.asia-southeast1.firebasedatabase.app/messages.json?auth=" +
          token,
      );
      setFetchedMessage(response.data);
    }
    getMessage();
  }, []);

  // {
  //   "rules": {
  //     "expenses": {
  //       ".read": true,
  //       ".write": true
  //     },
  //     "messages": {
  //       ".read": "auth != null",
  //       ".write": "auth != null"
  //     }
  //   }
  // }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
