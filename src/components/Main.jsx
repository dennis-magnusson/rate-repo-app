import { StyleSheet, View } from "react-native";
import { Navigate, Route, Routes } from "react-router-native";
import AppBar from "./AppBar";
import CreateReviewPage from "./CreateReviewPage";
import MyReviewsPage from "./MyReviewsPage";
import RepositoryList from "./RepositoryList";
import RepositoryPage from "./RepositoryPage";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignInPage />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/my-reviews" element={<MyReviewsPage />} />
        <Route path="/create-review" element={<CreateReviewPage />} />
        <Route path="/repository/:id" element={<RepositoryPage />} />
        <Route path="/signup" element={<SignUpPage />} exact />
      </Routes>
    </View>
  );
};

export default Main;
