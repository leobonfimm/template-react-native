import React from 'react';
import { View, StatusBar, Text } from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          backgroundColor: '#312e38',
        }}
      >
        <Text style={{ color: '#FFF', fontSize: 25 }}>
          Template react-native
        </Text>
      </View>
    </>
  );
};

export default App;
