import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { RoutePropArg, TabStackParamList } from "../types/navigation";
import {
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import { Platform, StyleSheet } from "react-native";
import TabOne from "../screens/tab_screens/TabOne";
import TabTwo from "../screens/tab_screens/TabTwo";
import TabThree from "../screens/tab_screens/TabThree";

const TabStack = createBottomTabNavigator<TabStackParamList>();

export default function TabsNavigator() {
  function screenOptions({ route }: RoutePropArg): BottomTabNavigationOptions {
    const isDarkMode = false;
    const bottomSheetOpen = false;
    const colorToUse = isDarkMode ? "#CE5158" : "#C2262E";

    return {
      tabBarIcon: ({ focused, size }) => {
        switch (route.name) {
          case "TabOne":
            return (
              <MaterialCommunityIcons
                name="menu-up"
                size={size}
                color={focused ? colorToUse : "#AEAEB2"}
                style={styles.tabBarIconSec}
              />
            );
          case "TabTwo":
            return (
              <MaterialCommunityIcons
                name="menu-up"
                size={size}
                color={focused ? colorToUse : "#AEAEB2"}
                style={styles.tabBarIconSec}
              />
            );
          case "TabThree":
            return (
              <MaterialCommunityIcons
                name="menu-up"
                size={size}
                color={focused ? colorToUse : "#AEAEB2"}
                style={styles.tabBarIconSec}
              />
            );
          default:
            return null;
        }
      },
      tabBarActiveTintColor: colorToUse,
      tabBarInactiveTintColor: "#AEAEB2",
      tabBarShowLabel: true,
      tabBarLabelStyle: styles.label,
      headerStyle: {},
      tabBarStyle: {
        display: bottomSheetOpen ? "none" : "flex",
        borderTopWidth: isDarkMode ? 0 : 0.8,
        borderColor: "#d8d8d8",
        backgroundColor: isDarkMode ? "rgba(31, 31, 31, 0.99)" : "#FFF",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
      },
    };
  }

  return (
    <TabStack.Navigator
      screenOptions={screenOptions}
      screenListeners={({}) => ({
        tabPress: () => {},
      })}
    >
      <TabStack.Screen
        name="TabOne"
        component={TabOne}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
        }}
      />
      <TabStack.Screen
        name="TabTwo"
        component={TabTwo}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
        }}
      />
      <TabStack.Screen
        name="TabThree"
        component={TabThree}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
        }}
      />
    </TabStack.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarIcon: {
    fontSize: 22,
    paddingTop: Platform.OS === "ios" ? 5 : 3,
  },
  tabBarIconSec: {
    paddingTop: Platform.OS === "ios" ? 2 : 3,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
  },
  tabBarIconFocused: {
    borderTopWidth: 1,
    borderColor: "red",
  },
});
