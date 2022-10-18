import { StyleSheet, TextInput as NativeTextInput } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  fontFamily: theme.text.font
});

// eslint-disable-next-line no-unused-vars
const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;