import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home, { HomeScreenOptions } from "../Screens/Home";
import Settings, { SettingsScreenOptions } from "../Screens/Settings";

const Tab = createBottomTabNavigator();

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
