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

import icone from "./assets/img-book.png";

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
     <Text style={styles.texto}>Cadastre seu Livro:</Text>
     <View style={styles.boxSide}>
      <Image style={styles.stretch} source={icone} />

      <View>
        <Text style={styles.textoContraste}>Titulo:</Text>
        <TextInput
          style={styles.box}
          onChangeText={(newText) => setText(newText)}
          value={text}
        />
      </View>
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
  stretch:{
    width: 100,
    height: 100
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
    width: "100%",
    height: 35,
    borderWidth: 1,
    padding: 5,
  },
  textoContraste: {
    fontSize: 18,
    padding: 4,
  },
  flex: {
    flexDirection: "row",
    margin: 20,
    justifyContent: 'center',
    gap: 90
  },
 
  center: {
    justifyContent: "center",
    marginTop: 20,
  },
  boxSide: {
    flexDirection: "row",
    alignItems: "center"
  }
});
