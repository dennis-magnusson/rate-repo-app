import { format } from "date-fns";
import { Alert, Pressable, StyleSheet, View } from "react-native";
import { Link, useLocation } from "react-router-native";
import theme from "../../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  flexContainer: {
    padding: 10,
    maxWidth: "100%",
  },
  row: {
    flexDirection: "row",
  },
  ratingContainer: {},
  rating: {
    flexBasis: 50,
    flexGrow: 0,
    flexShrink: 0,
    fontSize: theme.titleTextSize * 1.4,
    color: theme.colors.primary,
    fontWeight: "bold",
    display: "inline-block",
    width: 50,
    height: 50,
    borderWidth: 3,
    borderColor: theme.colors.primary,
    borderRadius: 25,
    textAlign: "center",
    lineHeight: 42,
  },
  reviewTextContainer: {
    flexBasis: "auto",
    flexGrow: 1,
    flexShrink: 0,
    float: "right",
    marginLeft: 10,
  },
  reviewUsername: {
    fontWeight: "bold",
    fontSize: theme.titleTextSize,
    marginBottom: 4,
  },
  reviewDate: {
    color: theme.colors.textGrey,
    marginBottom: 6,
  },
  reviewText: {},
  buttonContainer: {
    margin: 5,
    padding: 15,
    display: "block",
    borderRadius: 3,
    backgroundColor: theme.colors.error,
    flexGrow: "1",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: theme.titleTextSize,
    textAlign: "center",
  },
  buttonPrimary: {
    backgroundColor: theme.colors.primary,
  },
  buttonsParentContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
});

const ReviewItem = ({ review, deletePress }) => {
  const formattedDate = format(new Date(review.createdAt), "dd.MM.yyyy");
  const location = useLocation();

  const onMyReviewsPage = location.pathname === "/my-reviews";

  const handleDelete = () => {
    if (deletePress) {
      Alert.alert(
        "Delete review",
        "Are you sure you wish to delete your review of " +
          `${review.repository.ownerName}/${review.repository.name}`,
        [{ text: "Cancel" }, { text: "Delete", onPress: () => {deletePress(review.id)} }]
      );
    }
  };

  const buttons = (
    <View style={styles.buttonsParentContainer}>
      <View style={{ ...styles.buttonContainer, ...styles.buttonPrimary }}>
        <Link to={`/repository/${review.repositoryId}`}>
          <Text style={styles.buttonText}>View repository</Text>
        </Link>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={handleDelete}>
          <Text style={styles.buttonText}>Delete review</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.flexContainer}>
      <View style={styles.row}>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{review.rating}</Text>
        </View>
        <View style={styles.reviewTextContainer}>
          <Text style={styles.reviewUsername}>
            {onMyReviewsPage
              ? `${review.repository.ownerName}/${review.repository.name}`
              : review.user.username}
          </Text>
          <Text style={styles.reviewDate}>{formattedDate}</Text>
          <Text style={styles.reviewText}>{review.text}</Text>
        </View>
      </View>
      {onMyReviewsPage ? buttons : null}
    </View>
  );
};

export default ReviewItem;
