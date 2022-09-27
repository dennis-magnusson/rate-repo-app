import Constants from 'expo-constants';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292E",
  },
  headingText: {
    color: "white",
    fontSize: 18,
    padding: 18,
    fontWeight: "bold"
  }
});

const AppBar = ({ tabName }) => {
  return(
  <View style={styles.container}>
        <Pressable>
            <Text style={styles.headingText}>{tabName}</Text>
        </Pressable>
    </View>);
};

export default AppBar;