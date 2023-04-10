import React from 'react';
import { useState } from 'react';
import { Box, Text } from 'native-base';

const Timer = () => {
  const [seconds, setSeconds] = useState('00');
  const [miliSeconds, setMiliSeconds] = useState('00');

  return (
    <Box>
      <Text fontSize="md">
        {seconds}:{miliSeconds}
      </Text>
    </Box>
  );
};

export default Timer;
