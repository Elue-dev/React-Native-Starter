import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import TabsNavigator from "./TabNavigator";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <RootStack.Navigator initialRouteName={"TabStack"}>
      <RootStack.Screen
        name="TabStack"
        component={TabsNavigator}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
}
