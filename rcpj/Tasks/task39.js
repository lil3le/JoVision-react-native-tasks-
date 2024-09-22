import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { useSelector } from 'react-redux';
import ComponentOne from '../Componets/Task39/ComponentOne';

const Task39 = () => {
  const [isComponentOneVisible, setIsComponentOneVisible] = useState(true);
  const savedText = useSelector((state) => state.text);

  const toggleComponentOne = () => {
    setIsComponentOneVisible(!isComponentOneVisible);
  };

  return (
    <View>
      {isComponentOneVisible && <ComponentOne initialText={savedText} />}
      <Button title="Toggle Component One" onPress={toggleComponentOne} />
    </View>
  );
};

export default Task39;