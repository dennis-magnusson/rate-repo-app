import { useState } from "react";
import { useNavigate } from "react-router-native";
import { useDebounce } from "use-debounce";
import useRepositories from "../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";

const sortByVariables = {
  latest: {
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  },
  highRating: {
    orderBy: "RATING_AVERAGE",
    orderDirection: "DESC",
  },
  lowRating: {
    orderBy: "RATING_AVERAGE",
    orderDirection: "ASC",
  },
};

const RepositoryList = () => {
  const [order, setOrder] = useState("latest");
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchKeyword] = useDebounce(searchQuery);
  const data = useRepositories(sortByVariables[order], searchKeyword);

  const repositories = data?.repositories;

  const onEndReached = () => {
    data?.fetchMore()
  }

  return (
    <RepositoryListContainer
      repositories={repositories}
      order={order}
      onChange={(order) => {
        setOrder(order);
      }}
      onRepositoryPress={(id) => navigate(`/repository/${id}`)}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      onEndReached={onEndReached}
    />
  );
};

export default RepositoryList;
