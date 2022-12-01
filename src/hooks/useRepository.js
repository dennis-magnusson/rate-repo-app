import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_REPOSITORY_BY_ID } from "../graphql/queries";

const useRepository = (repoID) => {
    const [repository, setRepository] = useState();
    const repositoryResponse = useQuery(GET_REPOSITORY_BY_ID, {
        variables: { id: repoID },
        fetchPolicy: "cache-and-network",
    });

    const fetchRepo = () => { if (repositoryResponse.data){ setRepository(repositoryResponse.data.repository) } }

    useEffect(() => { fetchRepo(); }, [repositoryResponse]);

    return { repository, loading: repositoryResponse.loading, refetch: fetchRepo }
}

export default useRepository;