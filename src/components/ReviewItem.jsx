import { format } from "date-fns";
import { StyleSheet, View } from "react-native";
import { useLocation } from "react-router-native";
import theme from "../../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  flexContainer: {
    padding: 10,
    flex: 2,
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
});

const ReviewItem = ({ review }) => {
  const formattedDate = format(new Date(review.createdAt), "dd.MM.yyyy");
  const location = useLocation()

  const onMyReviewsPage = location.pathname === "/my-reviews"

  console.log(review)

  return (
    <View style={styles.flexContainer}>
      <View style={styles.row}>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{review.rating}</Text>
        </View>
        <View style={styles.reviewTextContainer}>
          <Text style={styles.reviewUsername}>{onMyReviewsPage ? `${review.repository.ownerName}/${review.repository.name}` : review.user.username}</Text>
          <Text style={styles.reviewDate}>{formattedDate}</Text>
          <Text style={styles.reviewText}>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;
