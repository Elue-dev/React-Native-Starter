import { useState } from "react";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { RoutePropArg, TabStackParamList } from "../types/navigation";
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";
import { Platform, StyleSheet, View } from "react-native";
import TestScreen from "../screens/TestScreen";

const TabStack = createBottomTabNavigator<TabStackParamList>();

export default function TabsNavigator() {
  function screenOptions({ route }: RoutePropArg): BottomTabNavigationOptions {
    const isDarkMode = false;
    const bottomSheetOpen = false;
    const colorToUse = isDarkMode ? "#CE5158" : "#C2262E";

    return {
      tabBarIcon: ({ focused, size }) => {
        switch (route.name) {
          case "News":
            return (
              <Ionicons
                name="newspaper-outline"
                size={size - 5}
                color={focused ? colorToUse : "#AEAEB2"}
                style={styles.tabBarIcon}
              />
            );
          case "Verify":
            return (
              <MaterialCommunityIcons
                name="newspaper-check"
                size={size}
                color={focused ? colorToUse : "#AEAEB2"}
                style={styles.tabBarIconSec}
              />
            );
          case "Search":
            return (
              <AntDesign
                name="search1"
                size={size}
                color={focused ? colorToUse : "#AEAEB2"}
                style={styles.tabBarIcon}
              />
            );
          case "AddNews":
            return (
              <Entypo
                name="add-to-list"
                size={size + 2}
                color={focused ? colorToUse : "#AEAEB2"}
                style={styles.tabBarIconSec}
              />
            );

          case "Profile":
            return (
              <FontAwesome
                name="user-o"
                size={size - 10}
                color={focused ? colorToUse : "#AEAEB2"}
                style={styles.tabBarIcon}
              />
            );
          case "More":
            return (
              <Entypo
                name="dots-three-vertical"
                size={size}
                color={focused ? colorToUse : "#AEAEB2"}
                style={styles.tabBarIcon}
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
        name="News"
        component={TestScreen}
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
