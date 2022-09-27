import Constants from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292E",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  headingText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 15
  }
});

const AppBar = () => {
  return(
  <View style={styles.container}>
        <Link to="/">
          <View><Text style={styles.headingText}>Repositories</Text></View>
        </Link>
        <Link to="/signin">
          <View><Text style={styles.headingText}>Sign in</Text></View>
        </Link>
  </View>);
};

export default AppBar;