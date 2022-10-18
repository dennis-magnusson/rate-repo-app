import { useField } from 'formik';
import { StyleSheet, TextInput } from 'react-native';
import theme from '../../theme';
import Text from './Text';

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: theme.colors.textLightGrey,
    borderRadius: 5,
    padding: 12,
    marginVertical: 8,
  },
  errorText: {
    color: theme.colors.error,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
  },
  errorInput: {
    borderColor: theme.colors.error,
  }
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