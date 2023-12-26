import { NavigatorScreenParams, RouteProp } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  TabStack: NavigatorScreenParams<TabStackParamList>;
  Onboarding: undefined;
};

export type TabStackParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  TabThree: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type TabsStackScreenProps<T extends keyof TabStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabStackParamList, T>,
    RootStackScreenProps<"TabStack">
  >;

export type RouteNavigatorProps = {
  navigation: NativeStackScreenProps<RootStackParamList>;
};

export interface RoutePropArg {
  route: RouteProp<TabStackParamList, keyof TabStackParamList>;
  navigation: any;
}
