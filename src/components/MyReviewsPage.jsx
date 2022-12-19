import { FlatList } from "react-native";
import useReviews from "../hooks/useReviews";
import ItemSeparator from "./ItemSeparator";
import ReviewItem from "./ReviewItem";
import Text from "./Text";

const MyReviewsPage = () => {
  const { reviews, error, loading } = useReviews();

  if (loading) {
    return <Text>Loading</Text>;
  }

  const onEndReached = () => {};

  const reviewNodes = reviews
    ? reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <>
      <FlatList
        data={reviewNodes}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={ItemSeparator}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
      />
    </>
  );
};

export default MyReviewsPage;
