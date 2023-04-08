import React from 'react';
import { useState } from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';

const Timer = () => {
  const [seconds, setSeconds] = useState(00);
  const [miliSeconds, setMiliSeconds] = useState(00);

  return (
    <View>
      <Text>
        {seconds}:{miliSeconds}
      </Text>
    </View>
  );
};

export default Timer;
