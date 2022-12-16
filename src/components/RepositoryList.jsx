import { useState } from "react";
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
  const data = useRepositories(sortByVariables[order]);

  const repositories = data?.repositories;

  return (
    <RepositoryListContainer
      repositories={repositories}
      order={order}
      onChange={(order) => {
        setOrder(order);
      }}
    />
  );
};

export default RepositoryList;
