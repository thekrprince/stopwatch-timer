import {
  NativeBaseProvider,
  Box,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
  SunIcon,
  MoonIcon,
  Flex,
} from 'native-base';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Timer from './components/timer';
import { useState } from 'react';

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const text = useColorModeValue('Light', 'Dark');
  const bg = useColorModeValue('warmGray.50', 'coolGray.800');
  const [isOn, setIsOn] = useState(false);

  const buttonHandler = () => {
    toggleColorMode();
    setIsOn(!isOn);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NativeBaseProvider>
          <Box bg={bg} padding={2} height={'100%'}>
            <Flex
              flexDirection="row"
              v={100}
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize={30}>Stopwatch</Text>
              <Button onPress={buttonHandler} variant="unstyled">
                {text === 'Light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Flex>
            <Timer />
            {isOn ? <Text>I am {text}</Text> : ''}
          </Box>
        </NativeBaseProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
