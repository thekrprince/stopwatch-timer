import React from 'react';
import { useState } from 'react';
import { Box, Flex, Text } from 'native-base';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const Timer = () => {
  const [seconds, setSeconds] = useState('00');
  const [miliSeconds, setMiliSeconds] = useState('00');
  const [isResumed, setIsResumed] = useState(false);
  const [isRestartEnabled, setIsRestartEnabled] = useState(false);

  // function for start button
  const timerStartHandler = () => {
    setIsResumed(true);
    setIsRestartEnabled(true);
  };

  // function for restart button
  const restartHandler = () => {
    setIsResumed(false);
  };

  // function for pause button
  const pauseHandler = () => {
    setIsResumed(false);
  };

  // function for lap button
  const lapHandler = () => {};

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      height="75%"
      mt="10"
    >
      <Box>
        <Text fontSize="6xl">
          {seconds}:{miliSeconds}
        </Text>
        <Text fontSize="2xl" textAlign="center">
          Ready!?
        </Text>
      </Box>
      <Flex width="80%" flexDirection="row" justifyContent="space-between">
        {!isResumed && (
          <>
            <AntDesign
              name="playcircleo"
              size={60}
              onPress={timerStartHandler}
            />
            <MaterialCommunityIcons
              name="restart"
              size={60}
              onPress={restartHandler}
              disabled={!isRestartEnabled}
            />
          </>
        )}
        {isResumed && (
          <>
            <AntDesign name="pausecircleo" size={60} onPress={pauseHandler} />
            <AntDesign name="flag" size={60} onPress={lapHandler} />
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Timer;
