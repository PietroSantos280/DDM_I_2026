import { Text, View, Image, TouchableOpacity } from 'react-native';
import estilos from './estilo';

export default function Sobre({ navigation }) {
  return (
    <View style={estilos.container}>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={estilos.imagem}
      />
      <Text style={estilos.titulo}>Sobre o Aplicativo</Text>

      <View style={estilos.card}>
        <Text style={estilos.textoDescricao}>
          Este aplicativo foi desenvolvido com React Native, Expo e Firebase para gerenciar autenticação de utilizadores e armazenamento de dados em nuvem.
        </Text>
        <Text style={estilos.versao}>Versão: 1.0.0</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={estilos.voltar}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}