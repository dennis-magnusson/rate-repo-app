import React from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import theme from "../../theme";
import RepositoryItem from "./RepositoryItem";
import SortingPicker from "./SortingPicker";
import TextInput from "./TextInput";

const styles = StyleSheet.create({
  separator: {
    height: 4,
    backgroundColor: theme.colors.textLightGrey,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListHeader = ({
  selectedValue,
  onChange,
  setSearchQuery,
  searchQuery,
}) => {
  return (
    <>
      <TextInput
        placeholder={"Search"}
        onChangeText={(value) => {
          setSearchQuery(value);
        }}
        value={searchQuery}
        style={{ ...theme.inputStyle, marginLeft: 10, marginRight: 10}}
      />
      <SortingPicker selectedValue={selectedValue} onChange={onChange} />
    </>
  );
};

export class RepositoryListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  renderHeader = () => {
    const props = this.props;
    return (
      <RepositoryListHeader
        searchQuery={props.searchQuery}
        setSearchQuery={props.setSearchQuery}
        order={props.order}
        onChange={props.onChange}
      />
    );
  };

  renderItem = ({ item }) => (
    <Pressable onPress={() => this.props.onRepositoryPress(item.id)}>
      <RepositoryItem item={item} />
    </Pressable>
  );

  render() {
    const repositoryNodes = this.props.repositories
      ? this.props.repositories.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList
        keyExtractor={(item) => `${item.id}`}
        ListHeaderComponent={this.renderHeader}
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={this.renderItem}
      />
    );
  }
}

export default RepositoryListContainer;
