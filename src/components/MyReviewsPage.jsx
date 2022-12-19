import { useMutation } from "@apollo/client";
import { FlatList } from "react-native";
import { DELETE_REVIEW } from "../graphql/mutations";
import useReviews from "../hooks/useReviews";
import ItemSeparator from "./ItemSeparator";
import ReviewItem from "./ReviewItem";
import Text from "./Text";

const MyReviewsPage = () => {
  const { reviews, error, loading, refetch } = useReviews();
  const [deleteReview, result] = useMutation(DELETE_REVIEW);

  if (loading) {
    return <Text>Loading</Text>;
  }

  const deletePress = async (id) => {
    try {
      await deleteReview({ variables: { id }});
      refetch()
    } catch (error) {
      console.log(error);
    }
  };

  const onEndReached = () => {};

  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];

  return (
    <>
      <FlatList
        data={reviewNodes}
        renderItem={({ item }) => (
          <ReviewItem review={item} deletePress={deletePress} />
        )}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={ItemSeparator}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
      />
    </>
  );
};

export default MyReviewsPage;
