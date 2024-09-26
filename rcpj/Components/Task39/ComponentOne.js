import React, { useState, useEffect } from 'react'; 
import { View, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { setText } from './textSlice';

const ComponentOne = ({ initialText }) => {
  const [text, setTextLocal] = useState(initialText || '');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setText(text));
  }, [text, dispatch]);

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={setTextLocal}  
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />
    </View>
  );
};

export default ComponentOne;
