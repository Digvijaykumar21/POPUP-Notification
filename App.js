import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NotificationPopup from 'react-native-push-notification-popup';


export default class App extends React.Component {


  componentDidMount() {
    this.popup.show({
      onPress: function () { console.log('Pressed') },
      appIconSource: require('./007.jpg'),
      appTitle: 'Sposync',
      timeText: 'Now',
      title: 'Ravi',
      body: 'whatsupp',
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <NotificationPopup ref={ref => this.popup = ref} />
        <View>
          <Text>
            Hii.. everyone
  </Text>
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

