import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";

const useReviews = () => {
  const variables = {
    includeReviews: true
  };
  const { data, error, loading, fetchMore, ...result } = useQuery(
    GET_USER,
    {
      fetchPolicy: "cache-and-network",
      variables: { ...variables },
    }
  );

  console.log(data);

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }
    fetchMore({
      variables: {
        after: data.me.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };


  return { reviews: data?.me?.reviews, error, loading, fetchMore: handleFetchMore, result };
};

export default useReviews;