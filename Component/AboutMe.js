import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableHighlight } from 'react-native'
import axios from 'axios';
// import MyNavigator from './MyNavigator';
import Header from './Header';

export default class AboutMe extends Component {
    constructor (props){
      super(props)
      this.state = {
          id: '',
          nama: '',
          alamat: '',
          jk: '',
          notelp: '',
          prodi: '',
          jurusan: '',
          fakultas: '',
      }
  }
  componentDidMount() {
    axios.get(`https://uasmobilenanda.000webhostapp.com/uasnanda/read_isUser.php?id='+ this.state.kode +'=metric'`)
      .then((response) => response.json())
      .then((responseJson) => {
      console.log(responseJson);
      this.setState({
      nama: responseJson.nama,
      alamat: responseJson.alamat,
      jk: responseJson.jk,
      notelp: responseJson.notelp,
      prodi: responseJson.prodi,
      jurusan: responseJson.jurusan,
      fakultas: responseJson.fakultas, });
      })
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header/>
        <View style={{ width: '100%', alignItems: 'center', marginVertical: 25 }}>
          <Image
            style={{ width: 200, height: 200, borderRadius: 200, }}
            source={require('./Img/usr.png')}
          />
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.teks}>About Me:</Text>

          <View style={{ width: '80%', alignItems: 'center', borderTopWidth: 1, marginTop: 10, padding: 10 }}>
            <Text style={styles.teks}>Nama = { this.state.nama}</Text>
            <Text style={styles.teks}>Alamat = { this.state.alamat}</Text>
            <Text style={styles.teks}>JK = { this.state.jk}</Text>
            <Text style={styles.teks}>NoTelp = { this.state.notelp}</Text>
            <Text style={styles.teks}>Prodi = { this.state.prodi}</Text>
            <Text style={styles.teks}>Jurusan = { this.state.jurusan}</Text>
            <Text style={styles.teks}>Fakultas = { this.state.fakultas}</Text>
          </View>
        </View>

        <TouchableHighlight
          style={{ margin: 20, backgroundColor: '#0021ff', height: 50, borderRadius: 50, alignItems: 'center', justifyContent: 'center', }}
          onPressIn={() => this.props.navigation.navigate('Hitung')}
          underlayColor='#0021ff'
        >
          <Text style={{ fontSize: 16, color: 'white' }}>Back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  teks: {
    color: 'black',
    fontSize: 16
  }
})