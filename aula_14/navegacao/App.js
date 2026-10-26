import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/login/Login';
import Home from './screens/home/Home';
import Participantes from './screens/participantes/Participantes';
import Escola from './screens/escola/Escola';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Participantes" component={Participantes} />
        <Stack.Screen name="Escola" component={Escola} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}