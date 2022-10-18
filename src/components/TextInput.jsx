import { StyleSheet, TextInput as NativeTextInput } from 'react-native';

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({
  
});

// eslint-disable-next-line no-unused-vars
const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];
  console.log(style)

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;