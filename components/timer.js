import React from 'react';
import { useState } from 'react';
import { Box, Button, Flex, Text, PlayIcon, IconButton } from 'native-base';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const Timer = () => {
  const [seconds, setSeconds] = useState('00');
  const [miliSeconds, setMiliSeconds] = useState('00');
  const [isResumed, setIsResumed] = useState(false);

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
            <AntDesign name="playcircleo" size={60} />
            <MaterialCommunityIcons name="restart" size={60} color="black" />
          </>
        )}
        {isResumed && (
          <>
            <AntDesign name="pausecircleo" size={60} />
            <AntDesign name="flag" size={60} />
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Timer;
