import React from "react";
import App from './App';
import DetailsScreen from './DetailsScreen';
import { createStackNavigator,createAppContainer} from "react-navigation";

const RootStack = createStackNavigator(
  {
    Home: App,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
export default createAppContainer(RootStack);


