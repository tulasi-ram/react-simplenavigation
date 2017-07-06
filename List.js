import React from 'react';
import {
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

class ListingScreen extends React.Component {
  static navigationOptions = {
    title: 'Listing page',
  };
  render() {
  //  const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Listing screen </Text>
      </View>
    );
  }
}
