import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  Alert
} from 'react-native';

import { StackNavigator } from 'react-navigation';

//import  './List.js'
// import ApiUtils from './ApiUtils'


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Text app tag</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Tulasi Ram' })}
          title="Chat with Ram"
        />

        <Text>Dashboard !</Text>
      <Button
        onPress={() => navigate('Dashboard')}
        title="Dashboard"
        />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}

class DashboardScreen extends React.Component {
  static navigationOptions = {
    title: 'Dashboard Page',
  };
  render() {
     const { navigate } = this.props.navigation;
    return(
      <View>
      <Text> Dashboard Screen</Text>
      <Button
        onPress={() => navigate('List', {requestCount:'160'})}
        title="Listing"
        />
      </View>
    );
  }
}

class ListingScreen extends React.Component {
  static navigationOptions = {
    title: 'Listing page',
  };
  render() {
  //  const { navigate } = this.props.navigation
  const {params} = this.props.navigation.state;
    return (
      <View>
        <Text>Listing screen {params.requestCount}</Text>
      </View>
    );
  }
}

const SimpleNavigation = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  Dashboard: { screen: DashboardScreen },
  List: { screen: ListingScreen },
});

AppRegistry.registerComponent('SimpleNavigation', () => SimpleNavigation);
