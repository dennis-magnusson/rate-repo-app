import { useQuery } from "@apollo/client";
import Constants from "expo-constants";
import { ScrollView, StyleSheet, View } from "react-native";
import { Link } from "react-router-native";
import { GET_USER } from "../graphql/queries";
import useSignIn from "../hooks/useSignIn";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292E",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headingText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

const AppBar = () => {
  const [, signOut] = useSignIn();
  const { data } = useQuery(GET_USER, {
    fetchPolicy: "cache-and-network",
  });

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <View>
            <Text style={styles.headingText}>Repositories</Text>
          </View>
        </Link>
        {data?.me ? (
          <View>
            <Text onPress={signOut} style={styles.headingText}>
              Sign Out ({data?.me.username})
            </Text>
          </View>
        ) : (
          <Link to="/signin">
            <View>
              <Text style={styles.headingText}>Sign In</Text>
            </View>
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
