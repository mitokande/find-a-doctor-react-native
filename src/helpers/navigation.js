import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DoctorLogin from "../screens/doctors/login";
import Welcome from "../screens/welcome";
import DoctorDashboard from "../screens/doctors/Dashboard";

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="DoctorLogin"
                    component={DoctorLogin}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="DoctorDashboard"
                    component={DoctorDashboard}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

