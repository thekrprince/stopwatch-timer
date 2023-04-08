import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const colorScheme = useColorScheme();

  const themeTextStyle =
    colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeBgStyle =
    colorScheme === 'light' ? styles.lightBgContainer : styles.darkBgContainer;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NativeBaseProvider>
          <View style={[styles.container, themeBgStyle]}>
            <Text style={[styles.heading, themeTextStyle]}>Stopwatch</Text>
            <StatusBar style="auto" />
          </View>
        </NativeBaseProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  heading: {
    fontSize: 30,
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#fff',
  },
  lightBgContainer: {
    backgroundColor: '#d0d0c0',
  },
  darkBgContainer: {
    backgroundColor: '#242c40',
  },
});
