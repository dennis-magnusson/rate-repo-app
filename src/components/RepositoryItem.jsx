import { Image, StyleSheet, View } from "react-native";
import theme from '../../theme';
import Text from "./Text";

const RepositoryItem = ({ item }) => {

  const styles = StyleSheet.create({
    itemContainer: {
      borderBottomColor: theme.colors.textDark,
      borderBottomWidth: 1,
    },
    infoView: {
      display: 'flex',
      padding: 10,
      flexDirection: 'row',
    },
    statsBar: {
      display: 'flex',
      flexDirection: "row",
      justifyContent: 'space-around',
    },
    statBox: {
      textAlign: "center",
      padding: 10
    },
    statValueText: {
      fontWeight: "bold",
      textAlign: 'center',
      marginBottom: 5
    },
    statTitle: {
      color: theme.colors.textDark,
      textAlign: 'center'
    },
    img: {
      width: 60,
      height: 60,
      borderRadius: 4,
    },
    languageTag: {
      padding: 4,
      marginTop: 4,
      display: 'inline-block',
      backgroundColor: theme.colors.primary,
      borderRadius: 6
    },
    languageText: {
      color: 'white'
    },
    nameText: {
      fontWeight: 'bold',
      fontSize: theme.titleTextSize,
      marginBottom: 4
    },
    descriptionText: {
      color: theme.colors.textGrey,
      fontSize: theme.titleTextSize
    },
    detailsBox: {
      marginLeft: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-around',
      flexShrink: 1
    }

  });

  // Parse number to thousands with k, for example 1000 => 1,0k or 4120 => 4,1k
  const parseNumber = (value) => {
    if (value >= 1000) {
      const divided = value / 1000
      return `${divided.toFixed(1)}k`
    } else {
      return value
    }
  }

  return (
    <View testID='repositoryItem' style={styles.itemContainer}>
      <View style={styles.infoView}>
        <Image style={styles.img} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.detailsBox}>
          <Text testID="fullName" style={styles.nameText}>{item.fullName}</Text>
          <Text testID="description" style={styles.descriptionText}>{item.description}</Text>
          <View style={styles.languageTag}><Text testID="language" style={styles.languageText}>{item.language}</Text></View>
        </View>
      </View>
      <View style={styles.statsBar}>
        <View style={styles.statBox}>
          <Text testID="stargazersCount" style={styles.statValueText}>{parseNumber(item.stargazersCount)}</Text>
          <Text style={styles.statTitle}>Stars</Text>
        </View>
        <View style={styles.statBox}>
          <Text testID="forksCount" style={styles.statValueText}>{parseNumber(item.forksCount)}</Text>
          <Text style={styles.statTitle}>Forks</Text>
        </View>
        <View style={styles.statBox}>
          <Text testID="reviewCount" style={styles.statValueText}>{parseNumber(item.reviewCount)}</Text>
          <Text style={styles.statTitle}>Reviews</Text>
        </View>
        <View style={styles.statBox}>
          <Text testID="ratingAverage" style={styles.statValueText}>{parseNumber(item.ratingAverage)}</Text>
          <Text style={styles.statTitle}>Rating</Text>
        </View>
      </View> 
    </View>
  );
};

export default RepositoryItem;