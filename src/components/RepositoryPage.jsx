import { format } from "date-fns";
import { FlatList, StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";
import theme from "../../theme";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import Text from "./Text";

const styles = StyleSheet.create({
  itemSeparator: {
    height: 4,
    backgroundColor: theme.colors.textLightGrey,
  },
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
    flex: "0 0 50",
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
    flex: "1 0 auto",
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

  return (
    <View style={styles.flexContainer}>
      <View style={styles.row}>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{review.rating}</Text>
        </View>
        <View style={styles.reviewTextContainer}>
          <Text style={styles.reviewUsername}>{review.user.username}</Text>
          <Text style={styles.reviewDate}>{formattedDate}</Text>
          <Text style={styles.reviewText}>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

const ItemSeparator = () => <View style={styles.itemSeparator} />;

const RepositoryPage = () => {
  const id = useParams().id;
  const { repository, loading, fetchMore } = useRepository(id);
  
  if (loading) {
    return <Text>loading...</Text>;
  }

  const reviewNodes = repository ? repository.reviews.edges.map((edge) => edge.node) : [];

  const onEndReached = () => {
    fetchMore()
  }

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <RepositoryItem item={repository} showLinkToGithub />
      )}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositoryPage;
