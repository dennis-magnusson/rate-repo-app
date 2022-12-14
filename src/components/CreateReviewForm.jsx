import { View } from "react-native";
import theme from "../../theme";
import Button from "./Button";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const CreateReviewForm = ({ onSubmit, error }) => {
  return (
      <View style={{ margin: 10 }}>
      <FormikTextInput
        testID="repoOwnerNameInput"
        name="repoOwnerName"
        placeholder="Repository owner name"
      />
      <FormikTextInput
        testID="repoNameInput"
        name="repoName"
        placeholder="Repository name"
      />
      <FormikTextInput
        testID="ratingInput"
        name="rating"
        placeholder="Rating between 0 and 100"
      />
      <FormikTextInput
        testID="review"
        name="review"
        placeholder="Review"
        multiline={true}
      />
      <View style={{ marginTop: 10 }}>
        {error && <Text style={{ textAlign: "center", marginBottom: 10, color: theme.colors.error }}>{error}</Text>}
        <Button text={"Create a review"} onPress={onSubmit} />
      </View>
    </View>
  );
};

export default CreateReviewForm;
