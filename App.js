import {
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Button,
  Alert,
  FlatList,
} from "react-native";
import React, { useState } from "react";

import flagTargaryan from "./assets/targaryan-flag-1.jpg";

export default function App() {
  const [text, setText] = useState("");
  const [movies, setMovies] = useState([]);

  const handleAddMovie = () => {
    if (text.trim()) {
      setMovies((prevMovies) => [...prevMovies, text]);
      setText("");
    }
  };

  const handleClearText = () => {
    setText("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.stretch} source={flagTargaryan} />

      <Text style={styles.texto}>Cadastre sua fala:</Text>

      <View style={styles.flex}>
        <Text style={styles.texto2}>Digite:</Text>
        <TextInput
          style={styles.box}
          onChangeText={(newText) => setText(newText)}
          value={text}
        />
      </View>

      <View style={styles.flex}>
        <Button
          style={styles.buttons}
          title="LIMPAR"
          onPress={handleClearText}
        />

        <Button
          style={styles.buttons}
          onPress={handleAddMovie}
          title="CADASTRAR"
        />
      </View>

      <FlatList
        data={movies}
        renderItem={({ item }) => <Text style={styles.phrase}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    backgroundColor: "gray",
    padding: 8,
  },
  phrase: {
    borderColor: "blue",
    borderRadius: 4,
    borderWidth: 2,
    padding: 5,
    margin: 5,
  },
  texto: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  box: {
    width: "75%",
    height: 35,
    borderWidth: 1,
    padding: 5
  },
  texto2: {
    fontSize: 18,
    padding: 4,
  },
  flex: {
    flexDirection: "row",
    margin: 20,
    gap: 20,
    justifyContent: 'center',
  },
 
  center: {
    justifyContent: "center",
    marginTop: 20,
  },
});
