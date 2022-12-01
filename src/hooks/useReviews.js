import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_REVIEWS } from '../graphql/queries';

const useReviews = (repoID) => {
  const [reviews, setReviews] = useState();
  const reviewsResponse = useQuery(GET_REVIEWS, {
    variables: { id: repoID },
    fetchPolicy: 'cache-and-network',
  });

  const fetchReviews = () => { if (reviewsResponse.data) { setReviews(reviewsResponse.data.repository.reviews) } };

  useEffect(() => { fetchReviews() }, [reviewsResponse]);

  return { reviews, loading: reviewsResponse.loading, refetch: fetchReviews };
};

export default useReviews;