import { FlatList } from "react-native";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import ItemSeparator from "./ItemSeparator";
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";
import Text from "./Text";

const RepositoryPage = () => {
  const id = useParams().id;
  const { repository, loading, fetchMore } = useRepository(id);

  if (loading) {
    return <Text>loading...</Text>;
  }

  const reviewNodes = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  const onEndReached = () => {
    fetchMore();
  };

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
