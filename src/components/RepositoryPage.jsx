import { useQuery } from "@apollo/client";
import { useParams } from "react-router-native";
import { GET_REPOSITORY_BY_ID } from "../graphql/queries";
import RepositoryItem from "./RepositoryItem";
import Text from "./Text";

const RepositoryPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_REPOSITORY_BY_ID, {
    fetchPolicy: "cache-and-network",
    variables: { id },
  });

  if (loading) {
    return <Text>loading...</Text>;
  }

  if (error) {
    return <Text>error: {error}</Text>;
  }

  return <RepositoryItem item={data.repository} showLinkToGithub />;
};

export default RepositoryPage;
