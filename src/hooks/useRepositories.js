import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (sorting, searchKeyword) => {
  const variables = { ...sorting, searchKeyword };
  const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables,
  });

  if (error) {
    console.log(error);
    return;
  }

  return { repositories: data?.repositories, loading, refetch };
};

export default useRepositories;
