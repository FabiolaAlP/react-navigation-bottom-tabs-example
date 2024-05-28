//this is a component that handles our navigation tree and contains the navigation state.
//this component must wrap all of our navigators structure.
import { NavigationContainer } from "@react-navigation/native";
//Since we are going to create bottoms tabs Navigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//import screens
import Home, { HomeScreenOptions } from "../Screens/Home";
import Settings, { SettingsScreenOptions } from "../Screens/Settings";

//creating our bottom tabs navigator
const Tab = createBottomTabNavigator();

//we create a small component that will have the different screens that will be part of our bottom tab navigator
function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#FF5733",
        tabBarInactiveTintColor: "#D3D3D3",
      }}
    >
      <Tab.Screen name="Home" component={Home} options={HomeScreenOptions} />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={SettingsScreenOptions}
      />
    </Tab.Navigator>
  );
}

function MainNavigator() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default MainNavigator;
