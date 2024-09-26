import React, { useState, useEffect } from 'react'; 
import { View, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { setText } from './textSlice';

const ComponentOne = ({ initialText }) => {
  const [text, setTextLocal] = useState(initialText || '');
  const dispatch = useDispatch();

  // Dispatch the text change to the Redux store whenever the text is updated
  useEffect(() => {
    dispatch(setText(text));
  }, [text, dispatch]);

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={setTextLocal}  // Update the local text state
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />
    </View>
  );
};

export default ComponentOne;
