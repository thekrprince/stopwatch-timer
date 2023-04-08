import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const colorScheme = useColorScheme();
  console.log(colorScheme);

  const themeTextStyle =
    colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeBgStyle =
    colorScheme === 'light' ? styles.lightBgContainer : styles.darkBgContainer;

  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <View style={[styles.container, themeBgStyle]}>
          <Text style={[styles.heading, themeTextStyle]}>Stopwatch</Text>
          <StatusBar style="auto" />
        </View>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: '30px',
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
