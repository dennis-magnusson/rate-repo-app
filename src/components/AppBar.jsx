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
          <>
            <Link to="/create-review">
              <Text style={styles.headingText}>Create a review</Text>
            </Link>
            <Link to="/my-reviews">
              <Text style={styles.headingText}>My reviews</Text>
            </Link>
            <Text onPress={signOut} style={styles.headingText}>
              Sign Out ({data?.me.username})
            </Text>
          </>
        ) : (
          <>
            <Link to="/signin">
              <View>
                <Text style={styles.headingText}>Sign In</Text>
              </View>
            </Link>
            <Link to="/signup">
              <Text style={styles.headingText}>Sign Up</Text>
            </Link>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
