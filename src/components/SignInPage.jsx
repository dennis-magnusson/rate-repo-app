import { View } from "react-native";
import SignInForm from "./SignInForm";

const SignInPage = () => {

  const onSubmit = (values) => {
    console.log(values)
  }

  return (<>
    <View>
      <SignInForm onSubmit={onSubmit}/>
    </View>
  </>);
};

export default SignInPage;