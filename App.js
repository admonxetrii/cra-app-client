import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React from 'react';
import { StatusBar, SafeAreaView, Platform, StyleSheet, Text, View } from 'react-native';

const isAndroid = Platform.OS === 'android';
export default function App() {
  return (
    <>
    <SafeAreaView style={{flex:1, marginTop: StatusBar.currentHeight }}>
      <View style={{padding: 16, backgroundColor: 'green'}}>
        <Text >Search</Text>
      </View>
      <View style={{flex: 1, padding: 16, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center'}}>
        <Text>Ma project work garirako babe </Text>
      </View>
    </SafeAreaView>
    <ExpoStatusBar style ="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  
});
