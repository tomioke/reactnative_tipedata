import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert,
  TouchableOpacity,
} from "react-native";



  // Tipe data string
  let nama = 'Tomi Irvan Oktavianto';

  // Tipe data number
  let umur = '22';

  // Tipe data boolean
  let menikah = 'false';

  // Tipe data object
  let saudara = {
    nama : 'Udin',
    umur: 16
  };

  // Tipe data array
  let tinggi = [170, 157, 120, 112];

  // Tipe data array map object
  let teman = [
    {
      jeneng: "Bayu",
      umure: 21,
    },
    {
      jeneng: "Tio",
      umure: 20,
    },
    {
      jeneng: "Jeri Riswanto",
      umure: 22,
    }
  ];

  const pi = 3.14;

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    // Contoh function
    alert01 = () => {
      Alert.alert("Hasil", "Hitung", [{ text: "Cancel" }, { text: "OK" }]);
    };

    // Rumus luas lingkaran
    luas_lingkaran = (pi, r) => {
      return pi * r * r;
    };

    render() {
      return (
        <View>
          <Text>Nama lengkap: {nama}</Text>
          <Text>Usia kamu sekarang: {umur}</Text>
          <Text>
            Saudara: {saudara.nama} | Usianya: {saudara.umur}
          </Text>
          <Text>Tinggi badan: {tinggi[1]}</Text>
          <Text>
            Info lengkap teman ke-1: {teman[0].jeneng} | usia teman:{" "}
            {teman[0].umure}
          </Text>
          <Text>
            Info lengkap teman ke-2: {teman[1].jeneng} | usia teman:{" "}
            {teman[1].umure}
          </Text>
        </View>
      );
    }
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
