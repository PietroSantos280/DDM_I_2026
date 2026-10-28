import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './Estilo';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.cardFormulario}>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
          }}
          style={styles.imagem}
        />

        <Text style={styles.titulo}>CYBER_NET // LOGIN</Text>
        <Text style={styles.subtitulo}>ACESSO AO SISTEMA RESTRITO</Text>

        <Text style={styles.label}>DIGITE O E-MAIL</Text>
        <TextInput
          nativeID="email"
          placeholder="runner@nc.net"
          placeholderTextColor="#666"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>SENHA DE ACESSO</Text>
        <TextInput
          placeholder="••••••••••••"
          placeholderTextColor="#666"
          style={styles.input}
          secureTextEntry={true}
        />

        <TouchableOpacity 
          style={styles.botaoCyber}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.textoBotao}>INICIALIZAR_CONEXÃO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}