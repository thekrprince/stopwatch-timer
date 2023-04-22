import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { Box, Flex, Text } from 'native-base';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [miliSeconds, setMiliSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isResumed, setIsResumed] = useState(false);
  const [isRestartEnabled, setIsRestartEnabled] = useState(false);

  // useEffect for mili seconds
  useEffect(() => {
    let miliSecondsInterval;

    if (isResumed) {
      miliSecondsInterval = setInterval(() => {
        setMiliSeconds((prev) => prev + 1);
      }, 10);
    }

    return () => clearInterval(miliSecondsInterval);
  }, [isResumed]);

  // useEffect to reset seconds to 0
  useEffect(() => {
    if (seconds === 60) {
      setMinutes((prev) => prev + 1);
      setSeconds(0);
    }
  }, [seconds]);

  // useEffect to reset miliSeconds to 0
  useEffect(() => {
    if (miliSeconds === 100) {
      setSeconds((prev) => prev + 1);
      setMiliSeconds(0);
    }
  }, [miliSeconds]);

  // function for start button
  const startHandler = () => {
    setIsResumed(true);
    setIsRestartEnabled(true);
  };

  // function for restart button
  const restartHandler = () => {
    setIsResumed(false);
    setIsRestartEnabled(false);
    setSeconds(0);
    setMiliSeconds(0);
    setMinutes(0);
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
      <Box width="100%">
        <Text fontSize="6xl" textAlign="center">
          {minutes > 0
            ? minutes.toLocaleString().length === 1
              ? `0${minutes}`
              : minutes
            : ''}
          {minutes > 0 && ':'}
          {seconds.toLocaleString().length === 1 ? `0${seconds}` : seconds}:
          {miliSeconds.toLocaleString().length === 1
            ? `0${miliSeconds}`
            : miliSeconds}
        </Text>
        {!isRestartEnabled && (
          <Text fontSize="2xl" textAlign="center">
            Ready!?
          </Text>
        )}
        {!isResumed && isRestartEnabled && (
          <Text fontSize="2xl" textAlign="center">
            Paused
          </Text>
        )}
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
