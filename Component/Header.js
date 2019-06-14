import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Header = (props) => {
  const { textStyle, backFooter } = styles;
  return (
    <View style={backFooter}>
      <Text style={textStyle}>Sistem Perpustakaan</Text>
      <Text style={textStyle}>Peminjaman Buku</Text>
    </View>
  );
};
const styles = {
  backFooter: {
    backgroundColor: '#33ffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    paddingTop: 25,
    position: 'relative',

  },
  textStyle: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center'
  }
}
export default Header;