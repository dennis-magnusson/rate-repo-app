import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";
import theme from "../../theme";
import RepositoryItem from "./RepositoryItem";
import SortingPicker from "./SortingPicker";

const styles = StyleSheet.create({
  separator: {
    height: 4,
    backgroundColor: theme.colors.textLightGrey,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListHeader = ({ selectedValue, onChange }) => {
  return <SortingPicker selectedValue={selectedValue} onChange={onChange} />;
};

const RepositoryListContainer = ({ repositories, order, onChange }) => {
  const navigate = useNavigate();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const renderItem = ({ item }) => {
    return (
      <Pressable
        onPress={() => {
          navigate(`../repository/${item.id}`);
        }}
      >
        <RepositoryItem item={item} />
      </Pressable>
    );
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={ <RepositoryListHeader onChange={onChange} selectedValue={order} /> }
      renderItem={renderItem}
    />
  );
};

export default RepositoryListContainer;
