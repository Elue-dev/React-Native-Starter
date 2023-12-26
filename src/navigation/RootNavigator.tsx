import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import TestScreen from "../screens/TestScreen";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RouteNavigator() {
  return (
    <RootStack.Navigator initialRouteName={"TabStack"}>
      <RootStack.Screen
        name="TabStack"
        component={TestScreen}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
}
