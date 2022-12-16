import { useField } from 'formik';
import { StyleSheet, TextInput } from 'react-native';
import theme from '../../theme';
import Text from './Text';

const styles = StyleSheet.create({
  inputStyle: theme.inputStyle,
  errorText: theme.errorText,
  errorInput: theme.errorInput
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  const inputStyle = [styles.inputStyle, showError ? styles.errorInput : {}];

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={inputStyle}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;