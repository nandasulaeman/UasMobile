import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Header = (props) => {
  const { textStyle, backFooter } = styles;
  return (
    <View style={backFooter}>
      <Text style={textStyle}>Sistem Status UKT</Text>
      <Text style={textStyle}>Nanda Sulaeman 1715051082</Text>
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