import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AvailableScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Available Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default AvailableScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
