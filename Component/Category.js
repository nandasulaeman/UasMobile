import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import axios from 'axios';
import Header from './Header';

export default class Category extends Component {
  constructor(props) {
    prefix_api = 'https://uasmobilenanda.000webhostapp.com/';
    super(props)
    this.state = {
      categories: []
    };
  }
  componentDidMount() {
    axios.get(prefix_api + 'uasnanda/read_listbuku.php')
      .then(res => {
        const categories = res.data;
        console.log(categories);
        this.setState({ categories });
      })
  }

  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
    <ListItem
      title={item.kategori_nama}
      subtitle={item.keterangan}
      onPress={
        () => {
          this.props.navigation.navigate('Buku', { id: item.kategori_id, title: item.kategori_nama })
        }
      }
    />
  )
  render() {
    return (
      <View style={styles.container} >
        <Header title='Kategori Buku' />
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.categories}
          renderItem={this.renderItem}
        />


        {/* Rest of the app comes ABOVE the action button component !*/}
        {/* <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Tambah Kategori Budaya" onPress={() => this.props.navigation.navigate('AddCategory')}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});