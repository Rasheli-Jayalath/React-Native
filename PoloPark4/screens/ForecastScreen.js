import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ForecastScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Forecast Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default ForecastScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
