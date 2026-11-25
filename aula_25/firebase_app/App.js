import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login/Login';
import Home from './screens/home/Home';
import Cadastro from './screens/cadastro/Cadastro';
import Perfil from './screens/perfil/Perfil';
import Editar from './screens/editar/Editar';
import Sobre from './screens/sobre/Sobre';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Editar" component={Editar} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// ```[cite: 1, 2]

// ---

// ### ⚠️ Regra de Ouro para o `App.js` não dar erro (Tela Branca)
// Como você pode ver nos imports acima, o `App.js` procura por arquivos em pastas específicas (`./screens/login/Login`, `./screens/cadastro/Cadastro`, etc.). 

// Para que o aplicativo não quebre, **todos esses arquivos precisam existir fisicamente nas pastas**, mesmo que por enquanto estejam apenas com um código simples.

// Confirme para mim: o seu arquivo `App.js` está exatamente com esse código e as pastas/arquivos das telas (`Login`, `Cadastro`, `Home`, etc.) já estão criados no seu projeto?