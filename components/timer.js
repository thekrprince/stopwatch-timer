import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { Box, Flex, Text } from 'native-base';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [miliSeconds, setMiliSeconds] = useState(0);
  const intervalRef = useRef(null);
  const [isResumed, setIsResumed] = useState(false);
  const [isRestartEnabled, setIsRestartEnabled] = useState(false);

  useEffect(() => {
    let secondInterval;
    if (isResumed) {
      secondInterval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isResumed]);

  // function for start button
  const startHandler = () => {
    setIsResumed(true);
    setIsRestartEnabled(true);
  };

  // function for restart button
  const restartHandler = () => {
    setIsResumed(false);
    setSeconds(0);
    setMiliSeconds(0);
  };

  // function for pause button
  const pauseHandler = () => {
    setIsResumed(false);
    clearInterval(intervalRef.current);
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
            <AntDesign name="playcircleo" size={60} onPress={startHandler} />
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
